# Use the specified base image
FROM ghcr.io/linuxserver/webtop:ubuntu-mate

# Set environment variables
ENV PUID=1000 \
    PGID=1000 \
    TZ=America/Chicago



# Expose the specified port
EXPOSE 3000

# Optional: Increase shared memory size (handled at runtime)
