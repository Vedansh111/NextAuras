# syntax=docker/dockerfile:1
FROM docker.io/continuumio/miniconda3:latest

WORKDIR /

COPY ./flow/requirements.txt /flow/requirements.txt

# Update Conda
RUN conda update -n base -c defaults conda -y

# Install required packages
RUN apt-get update && apt-get install -y \
    runit gcc ffmpeg imagemagick wget && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install pip externally using get-pip.py
RUN wget https://bootstrap.pypa.io/get-pip.py -O get-pip.py && \
    python get-pip.py pip==23.0.1 && \
    rm get-pip.py && \
    pip --version

# Create conda environment without pip
RUN conda create -n promptflow-serve python=3.12.6 -q -y && echo "Conda environment created successfully" && \
    conda run -n promptflow-serve python -m ensurepip && echo "Pip installed in Conda environment" && \
    conda run -n promptflow-serve pip install -r /flow/requirements.txt && echo "Requirements installed successfully" && \
    conda run -n promptflow-serve pip install promptflow && echo "Promptflow installed successfully" && \
    conda run -n promptflow-serve pip install keyrings.alt && echo "Keyrings.alt installed successfully" && \
    conda run -n promptflow-serve pip install gunicorn==20.1.0 && echo "Gunicorn installed successfully" && \
    conda run -n promptflow-serve pip install 'uvicorn>=0.27.0,<1.0.0' && echo "Uvicorn installed successfully" && \
    conda run -n promptflow-serve pip cache purge && echo "Pip cache purged successfully" && \
    conda clean -a -y && echo "Conda environment cleaned successfully"

COPY ./flow /flow

EXPOSE 8080

COPY ./connections /connections

# Reset runsvdir
RUN rm -rf /var/runit
COPY ./runit /var/runit
# Grant permission
RUN chmod -R +x /var/runit

# Copy start script
COPY ./start.sh /
CMD ["bash", "./start.sh"]
