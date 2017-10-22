#!/bin/bash
cd "${0%/*}"

echo updating source...
sudo su www-data -s /bin/sh -c "git pull"
echo done.
