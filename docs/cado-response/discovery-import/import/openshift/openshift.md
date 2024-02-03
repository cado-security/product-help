---
title: RedHat Openshift
hide_title: true
sidebar_position: 1
---

# RedHat Openshift

First, generate a collection script using Cado Host under Import > Cado Host.

Then, you will need to execute the script on the target container, as such:
    
```
oc login --token=sha256~... --server=https://api.system.openshiftapps.com:443
oc exec container-name -c container -- mkdir -p /tmp/cado-host
oc exec container-name -c container -- curl -s https://cado-public.s3-accelerate.amazonaws.com/cado-host/v1.5.4/linux/cado-host --output /tmp/cado-host/cado-host
oc exec container-name -c container -- chmod +x /tmp/cado-host/cado-host
oc exec container-name -c container -- ./tmp/cado-host/cado-host --presigned_data ...
```

![Openshift](/img/openshift.png)