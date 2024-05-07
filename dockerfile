# FROM node:22-slim

# WORKDIR /reactProject

# COPY . . 

# RUN npm install

# EXPOSE 3000

# CMD ["npm", "start"]
# Use a smaller base Python image
FROM python:slim-buster
# Set the working directory in the container
WORKDIR /app
# Copy only the requirements file first to leverage Docker cache
COPY requirements.txt .
# Install dependencies
RUN pip install --trusted-host pypi.org --trusted-host files.pyt
# Copy the rest of the application code
COPY . .
# Expose the port on which the Flask app will run
EXPOSE 5000
ENV ROOM_FILES_PATH "rooms/"
ENV USERS_PATH "users.csv"
ENV FLASK_ENV development
# Run the Flask app
CMD ["python", "./chatApp.py"]