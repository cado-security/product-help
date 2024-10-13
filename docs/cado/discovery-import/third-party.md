---
title: Third party disk images & triage
hide_title: true
sidebar_position: 11
---

# How to Import On-Premise Disk Images and Triage Collections from Third-Party Tools

### Full Disk Collections using FTK Imager

While triage collections are recommended for being smaller and faster to process, full disk images can also be imported into Cado. You can create these images using tools like FTK Imager, a free tool widely used for forensic disk imaging.

**Steps to create a disk image using FTK Imager:**
1. Download FTK Imager from the [Exterro website](https://www.exterro.com/ftk-product-downloads/ftk-imager-version-4-7-1).
2. Follow the [tutorial](https://cloudnine.com/ediscoverydaily/electronic-discovery/how-to-create-an-image-using-ftk-imager-ediscovery-best-practices/) on CloudNine to create a disk image.
   
Cado supports importing full disk images in formats such as `.dd` and `.e01`.

### KAPE and Velociraptor

Cado also supports forensic collections in ZIP format from open-source tools like [KAPE](https://www.kroll.com/en/insights/publications/cyber/kroll-artifact-parser-extractor-kape) and [Velociraptor](https://www.rapid7.com/products/velociraptor/). Simply collect the artifacts and upload the ZIP file to cloud storage for import into Cado.