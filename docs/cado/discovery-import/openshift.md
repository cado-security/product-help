---
title: RedHat Openshift
hide_title: true
sidebar_position: 8
---

# How to Import Data from RedHat OpenShift

To import data from RedHat OpenShift, follow these steps:

1. **Generate a Collection Script**:  
   First, generate a Cado Host collection script by navigating to **Import > Cado Host** in the Cado platform.

2. **Execute the Script on the Target Container**:  
   Use the commands below to execute the script on the desired container within OpenShift:

```bash
oc login --token=sha256~... --server=https://api.system.openshiftapps.com:443
oc exec pod-name -c container-name -- mkdir -p /tmp/cado-host
oc exec pod-name -c container-name -- curl -s https://cado-public.s3-accelerate.amazonaws.com/cado-host/v1.5.4/linux/cado-host --output /tmp/cado-host/cado-host
oc exec pod-name -c container-name -- chmod +x /tmp/cado-host/cado-host
oc exec pod-name -c container-name -- /tmp/cado-host/cado-host --presigned_data ...
```

Replace `pod-name`, `container-name`, and `--presigned_data` with the relevant values from your setup.

![OpenShift](/img/openshift.png)