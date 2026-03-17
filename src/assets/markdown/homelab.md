# Intro
What started as an old gaming PC, is now a fully fledged homelab running multiple services in production which have become essential in my day to day life.


# Journey
## How it started
The need for a server became clear when playing Minecraft with my friends back in the day. Because we didn't want to pay for a dedicated server, someone (that someone would be me) would need to leave the Minecraft server running on their PC the whole time, if anyone wanted to be able to play. That is when I realized I didn't need to do this on my main PC, which would slow it down significantly. Since I had an old PC lying around which still had Windows 10 installed, I could just run the Minecraft server on there. Because I didn't have an extra monitor, keyboard and mouse to leave attached to it all the time, I learned about something called RDP. And before I knew it, I had my own dedicated server (albeit with a lot of overhead) running Minecraft to play with my friends! I didn't know it back then, but this would become the start of a long and deep journey, which is still far from being finished!
## Linux & Docker
After running my initial setup for a while, I realized how bloated it was to keep a GUI running in the background all the time which I was barely using. I also knew Windows was far from the best choice for a server, since it comes with significant overhead. That is when I completely wiped Windows of my server, and installed headless Ubuntu on it. I chose Ubuntu because I had already experimented with it a bit, and beacause I didn't know any better back then. While researching the topic, I read a lot about Docker. From what I understood, it provided exactly what I needed. Since I was keen to expand my server, Docker would allow me to run multiple services isolated from eachother, without much struggle. On top of that, almost all services I wanted to try provided prebuilt Docker images. So Docker was just the next logical step forward!
## Proxmox

# Architecture

## Hardware
This is just whatever I had lying around, with some small extra's. Like I previously stated, it is just an old (and my first) gaming pc. The specs it came with out of the box are the following:
- TODO

The only additions I made were the following:
- Added 12GB of cheap RAM I bought from a friend who wasn't using it.
- Bought an 8TB Seagate Barracuda for bulk storage.
- Bought a 1TB Samsung 990 EVO Plus SSD for a fast boot drive
- Bought a Google Coral TPU for object detection for my camera (see [Smart Home](#smart-home))

## Operating system

I'm using [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) as a type 1 hypervisor.

## Virtualization & Orchastration


## Networking
### ISP
###  Firewall: pfSense
### VPN: Wireguard
### Public Reverse Proxy: Cloudflare
### Private reverse Proxy: Traefik


# Services

## Monitoring

## Website

## Cloud File Storage

## Cloud Media Storage

## Streaming

## Smart Home

## Game Server

# Future