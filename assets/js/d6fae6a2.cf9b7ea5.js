"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9326],{55258:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(74848),t=s(28453);const o={title:"Backup and recover",hide_title:!0,sidebar_position:1},i="How to backup and recover Cado in AWS",r={id:"cado/deploy/aws/performance-resiliency/aws-backups",title:"Backup and recover",description:"Cado backs up any imports to S3 which can then be re-imported later to a fresh instance. This is the simplest method for backups.",source:"@site/docs/cado/deploy/aws/performance-resiliency/aws-backups.md",sourceDirName:"cado/deploy/aws/performance-resiliency",slug:"/cado/deploy/aws/performance-resiliency/aws-backups",permalink:"/cado/deploy/aws/performance-resiliency/aws-backups",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/performance-resiliency/aws-backups.md",tags:[],version:"current",lastUpdatedAt:1736765008,formattedLastUpdatedAt:"Jan 13, 2025",sidebarPosition:1,frontMatter:{title:"Backup and recover",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Dedicated forensics account",permalink:"/cado/deploy/aws/security/forensics-account"},next:{title:"High availability",permalink:"/cado/deploy/aws/performance-resiliency/high-availability"}},c={},l=[{value:"Backup and Recovery for default non-HA deployments",id:"backup-and-recovery-for-default-non-ha-deployments",level:2},{value:"Scheduling Automated Backups of the Data Volume",id:"scheduling-automated-backups-of-the-data-volume",level:3},{value:"Restoring the Data Volume",id:"restoring-the-data-volume",level:3},{value:"Backups with High Availability",id:"backups-with-high-availability",level:3}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"how-to-backup-and-recover-cado-in-aws",children:"How to backup and recover Cado in AWS"}),"\n",(0,n.jsx)(a.p,{children:"Cado backs up any imports to S3 which can then be re-imported later to a fresh instance. This is the simplest method for backups.\nYou will need to restore the data volume if you want to recover user settings such as user logins, and processed data."}),"\n",(0,n.jsx)(a.h2,{id:"backup-and-recovery-for-default-non-ha-deployments",children:"Backup and Recovery for default non-HA deployments"}),"\n",(0,n.jsx)(a.p,{children:"This section explains how to recover or migrate the Cado platform to a new instance."}),"\n",(0,n.jsx)(a.p,{children:"If a Cado instance fails, you will need to recover and attach the data volume to a new instance. The data volume contains previously imported data as well as user settings."}),"\n",(0,n.jsx)(a.p,{children:"You can also use this approach to migrate Cado to a new availability zone or region."}),"\n",(0,n.jsx)(a.h3,{id:"scheduling-automated-backups-of-the-data-volume",children:"Scheduling Automated Backups of the Data Volume"}),"\n",(0,n.jsx)(a.p,{children:"Amazon EBS Snapshots are stored by AWS in Amazon S3, where it is stored redundantly in multiple Availability Zones."}),"\n",(0,n.jsxs)(a.p,{children:["You can create an ",(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.a,{href:"https://us-west-2.console.aws.amazon.com/events/home",children:"EventBridge"})})," rule that regularly (e.g. daily) backs up the CadoResponse EC2 instance:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"AWS Backup 1",src:s(36281).A+"",width:"551",height:"560"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"AWS Backup 2",src:s(69698).A+"",width:"571",height:"408"})}),"\n",(0,n.jsxs)(a.p,{children:["For more, see ",(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-scheduled-snapshot.html",children:"this tutorial"})})," from AWS."]}),"\n",(0,n.jsx)(a.h3,{id:"restoring-the-data-volume",children:"Restoring the Data Volume"}),"\n",(0,n.jsx)(a.p,{children:"To perform a migration or restoration to a new instance, deploy a Cado installation and Stop the Cado EC2 Installation."}),"\n",(0,n.jsxs)(a.p,{children:["The operating system volume will be smaller (typically 10 GB). Detach the larger Data Volume (",(0,n.jsx)(a.code,{children:"/dev/sdh"})," seen below):"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"AWS Backup 3",src:s(60203).A+"",width:"606",height:"104"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"AWS Backup 4",src:s(93940).A+"",width:"247",height:"270"})}),"\n",(0,n.jsxs)(a.p,{children:["Next, ",(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/restore.html",children:"restore"})})," the Snapshot backup of your old Cado installation to a Volume in the same availability zone as your new Cado EC2 Instance."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"AWS Backup 5",src:s(31421).A+"",width:"254",height:"64"})}),"\n",(0,n.jsxs)(a.p,{children:["Then, simply ",(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html",children:"attach"})})," the restored Data Volume to your new Cado EC2 Instance and start it."]}),"\n",(0,n.jsx)(a.h3,{id:"backups-with-high-availability",children:"Backups with High Availability"}),"\n",(0,n.jsx)(a.p,{children:"If you have opted for the High Availability deployment in AWS, back-ups need to be enabled for the native AWS services used in the deployment:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-snapshots.html",children:"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-snapshots.html"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html",children:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html",children:"https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups.html",children:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups.html"})}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"You can also enable automated back-ups in the CloudFormation or Terraform deployment template, for example with:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"ElastiCache:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",children:'SnapshotRetentionLimit: 7\nSnapshotWindow: "03:00-04:00"\n'})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"RDS:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",children:'BackupRetentionPeriod: 7\nPreferredBackupWindow: "03:00-04:00"\n'})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"OpenSearch:"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-yaml",children:"SnapshotOptions:\n    AutomatedSnapshotStartHour: 3\n"})}),"\n",(0,n.jsx)(a.p,{children:"Snapshots are not enabled by default for cost reasons."})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},36281:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/aws-backup-1-0ea6616ad39ba74e1380d878606d4e9a.png"},69698:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/aws-backup-2-5704a0f85c843e2bac5efef40f42d14b.png"},60203:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/aws-backup-3-aa9c09491fe25218da52c4c56e163e32.png"},93940:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/aws-backup-4-5504cf261e4c5a3680ed3e026c7928a8.png"},31421:(e,a,s)=>{s.d(a,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAABACAYAAAA6VspUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABgZSURBVHhe7Z3pU1xXmqef3MiFJJMEMiHZNwFCSEKbte+StdmtcnS7eiq6oiPmL5jpLz2faqK+zIeJmJmIiZilumuiqruqXba7u1y22tZqW2hBktkkJLGIRawCkoRcyYTc52SSkhFGEiCpCon7oAxJ5977nuWe3znve7h5jywYDMaQkJBYVbwy4Y/ZxrnX1oFtfIJIJJJMlVjpqFQqykuLWVu5hrQ0fTJV4m3nlQn/7IVvmJh0kJWZkehMEm8G/ukZRsds7N+zIyF+idXBKxP+L/7fb6gSHWf/np2kpEjCf1Pw+af5+1/9li2bNrDznS3JVIm3HXny75cmHA6j0agl0b9hpOq0yGUyotFoMkViNfDKhC8hIfHmIAlfQmIVIglfQmIVIglfQmIVsmqFH/I5sU868c2EkikSEquHN0P4ETvdDVf46g+f803rIBO+l1yBDo3Sdu0bfv/xV9x4MIpb0r7EKuONEH5o/AE3r3/L52cv8Ydrd+mf9LFo6c8M03L5HL+71ELvhG82TSYj4p/E4XDhC0WJyWaTVxqhcJiGptt8/uV5hh+NJFMlJF6eN0D4QWzdD+kf8xNRxXA97KR/1I5vgaeCo+EZPC4nbt80oUhyaHD10/zddb5s6GDQ7iYQChORmyjfspuT7x9ka0kWesXsqXGiQS+O8WFGxicTYUD0yeNNUaKhAMFgiEhU/Dtx3hjjLh+B8JxhKBrG57ExNjKC3eMn+Lgcy6D3YT8Xv7nCma8ucP1mAw6nK3lEQuLlUPzsZz/7efLfL0V8ZsrNzaGoID+Z8ooIDtNU10CzI531ZRpibiF6QwmlBTmYNMlxK+xl6N4tLl+9yfWGVlrbOhkMaNH6+2i5dYtrbcKd904z7RBCDeswZYCzvYu2Ngcqq5msDD2qqB9bewN1V65x5btW7tzvov2hjbDGSLpRj1oxSdfVeuqaHtDX10lrSzM3Gu+KvHpxKdPJNBnQhR9x58Z1vqm7xXd32rnf2Y1LYSLDlI5uic81uVxuLlyq487d+0z5fAnvJDvbTLbFjFI5Z6R6BXzX2EJOtoXC/LxkisTbzoqf8YPjvXSPTUBuGZs3raPQpGCgd5DRSS/hxBlRnL1NXL50gYvNPbhkQthpGmSxMOFQkGm/j1AoHsQLF0GkxeI/MS8j7Xepr2ulx+YhII76Ht3hyuWLwjMYwJ+SgVnlobvlGp9dbOTBqIsQyWsu1dPycIKgLg1dZILe1puca+hkyDmDs6+Z61eu0uFUkJFfRIk5VQwYooRLfCg64eI33+a2EL3P70+k2cbtXKu/xcjoWOL/EhIvwwoXvp+R7n5GJ2IUFlrJq1xLWZYJxVAPA7ZJphLKd9Lf2sb97gDW9Ts5+d4J/uzUcY7UFlNQWsOmqgKs6WK6NZewdd8h3t1USrZembD+PTOMPRAzdO8EqeVbOHTsBKdP7+OdXC2ue/doH7LjnR1lIKAiu6KWfUePcXx7CTnpcibcHhEWiDDA68Y1Pc0UKWQWVbJr/yF2VFpJVyevXSRxF/9mQzMTk5PJlFnahQfxXVOL5PJLvDQrW/j+Idq7x7A5gzge3ubylWYe2LyEfCN0DYxh9wbFSV5cE35mfAaKi4spzs3EYEgnI02PLtVIml6HWiUDtR5DhoUsg/i/cv5qXoAp9zSBaRX5hfnkZmdiyhXhhDUdY8SFd2qGmcfCR0t6uhFjmgGDXktKinzWixA/xuJattUUoZns5OqFs3x6tp77Q04CSwjz4y5+/Y0GEU4MEpm3PjAzM8N1cay9s4tAIF53CYnlsaKF7xvppXdsErdwtG19HTTcaKHT7hHz8wz93YOMTIhBACHihI6DBMNR5q6zLR45SoUMhTxERBiIxhcOo2HxJyrCAnFMLkO+iJbSWKrYeeg9fnL6CNvzIgy01vPFjXYGHbPu+mJout36lIs/H8nll3gVrGDhe3nUNYTNHqRg0y5Onv6AD390mh//xSF2FptRCne/f3QCTzCD7DwDeqOH9tY7QjTtYrZ8QPewHfd0WMzIaiFo4dpPjjI80EvPqIOpmfm/EtCQZTWhT4P+zg7aH3TQdf82d4WL79JnYzbpSV3Eepp3bBhHUIa1cgPbN4qQQhdm2ObA5Vv87Dxun0gs5j2PwaFHCc9AQmK5rNxVfW8316+0cGdITe3Ro7y7dwvrSoooKbKisgtPoL+fSUMx5YVFFGWnEPHa6O7qo69/iN7uHh5FjFhzLJjTYjgGhhgaGGXMNsqEPFO48io8bZ10Dkcp2LaONQVmjKkaZNMOcW0fD/sH6OnoosutZs2OvezfXE623sdAY9ucazKR2dppah9gJKWQ7evKSBv/jsvXbnKztY+ungEGHEpKN25iR3UhJu38dYWF0Wo0FIo23FCzlk0baxb81K5fR1lZMampuuRVL4e0qr/6eGUv4vhfv/gVW7fUsnfX9mTKS+Ifob1jgCGXmtKaMiFuIymJA1Fcg0KA/eP408uoKc3DkhrFOdjDg74R7FNhYjIVpuJKqkusZGqDjPcIEQ9O4BITb2p+hbgmjUDvQ3pHo+RsWEOxiOXVRPCN9dLRM8Soa4ZITIEqzULl2nIKzQZS5B6G73Y/dQ0T3dzrHmFcZaV2TSFG/0Nx/TCjbhEyxK/XZbKmeo0ou7C/gn2r//m/f8nGDevYvWNbMkXibWflCn85xCKE40G+XCHce3n8Ab3viYnYPSYTafFPMm0hEjYixEQUpFAoRGz/vJMX4GWv/xMgCX/1sbJX9ZeKTIFSpUKpmCf6ODJ5QoTPFX2chI0UVCrl8kT7stdLSPwReLuELyEhsSgk4UtIrEIk4UtIrEIk4UtIrEJemfDjm2j4/dPMBOJfeZF4U/B4pxKv1o7/FkRi9fDKfp33bd11evsHEgOA1IneHOLfBIyEIxzct4vyspJkqsTbjsxmn4g9HBzA7fUmk5aHw+nmYd8ATpdL2pzhDUKhUJIXf+KyMB+dVpNMlXhbqSorI8dsRiZm6dj1xkbS9HosmZnJwxISEm8bnb29VJSWsL6q6nvhr6uoSCRKSEi8nVy8dg29LpXa6mppVV9CYjURjcbfQBV/oFxCQmLVIQlfQmIVIglfQmIVIglfQmIVIglfQmIVIglfQmIVIgn/FRGZdmEbseOcCsS37lgRRHx2BjtbaWnt5pHDT0h6oFI0ygwu2yjjjqk5r0xffbx+4c/Y6b9znTO//xd++9Hv+OTzczR02/C+Zd/lCYzc5vPfXeVGxyTTybQ/KVMD3PzXz/jsiyvcaumg3+5hWhI+TI/Q9Pmn1N3sZHJF3Kg/Da9V+DNjd/n6nz7i0z/U0z44icc3jWv8IY/GXSzhjdOLx9HFZ3W3aRqMb3n1xyXsHuJO40N6x/yshK0ugvYuvq4bwaEpoWZzFYVZqaRIbwKL3yiGWpvo6bPhW+6M/yfsZ6+K1yf8gI17Fz+nrtOLad1OTpw6yen3TnHq3SNsLreQNm9bqUgoRDgSebL9dSQ0u1GkZyqISP6eSIig34V9wolr3rHgRDd1zZ08sPt+4G4/094SiYRmcDucuD3CdX6JnXDnkrDpcuP1i7LFTUYjBH1OJl0+poPz8nhyzMNUQLTXM75bGfRMMj5jJKt0LTUbKyjITEMzd2+AsGjHUGQ2P8Fi6rWkcj7F92X2TH+f5xOeYyfeL6YcdiadbvyivD/MZU57BOcfX36+z2vn5/WzN4XX9qx+cOgK/+O/nCWw7QQ//XA3ZYb528U66PzDFcbUBqanHtHVE6Ts8FF2bzDiaL3G9fsjwhWTIRc327JxD/u2VZE1dZ+LV1p55PQTjoWYdsnJ3XqAAztLiHVe4PzZc3zSGiInP59yy1YOfbCHbVUqRpsWtpc/t0yBEZrPNOPNrRYzZBlZWpEWsnHni0bc1rWs21xItO8W395sZ8wbJhbxIcvexP4D21mXb2Cm5Tf8p/9qY+1PP+Cn75ejG2rgTGeE0sq1bCxMR8UMQw1f0R4uYW31eize25y5bycy5SI4M43H4cEdzKJibTZKnwu3cwK73Yu2ci/HD26mzKwl5uqjoa6euyMOpuVyImELG/fsZtu6PIxPqjKbz9kzX/DJZT8ZlWVUlaxlz/HDVGpaaHFoMPq9DHf1ECg7wrHd60gdbXpmvaLxeiyxnE/NJtOiDesv0Ng9wRQGUiJGavbupFZ0tY7zbThVUXwBD17XrB1Z6Q5OHd5KVU6Y3osXuNnrwCM0GQmI2TWtit0H91JbmoW/6wsu900RHA8TnZli0uclqF/DzoP72FxqRhd8Rr55dj77z/+djrQNFJUXJTY+fTpfPTHvALcvf0vzgBM/SvxhPRXb97O/NpfA/bML97MakWeyyiuV+LP6Oo2OTete47P60+ODDEQzMeXnYdIvtEe0l6FrX3PhXAMPvQpMORZMwg3w9tZztuUBE8oMytaUUpLmofmbFm53TxJQasm0WCkoKqNizRpylMNcbrzDvZEpFGlZZJlS0ejTyMjJpbAoi/RUFZ6eZ9t7KsQTQvKIwaqu5TYDjtkjwdE2zjd38cA5IzrYPS581UinI4XssnLKi01Md1zkmxu3GXT+0LkP2ju53NQ2Z1YIYe+4SmNbFzafmE3ix8/c4u5wFH12AWUl6QTuXOHqjU7cSiPW4nKKUh00nG+i4YEQOi56rp6nuWsSZWapGKSLSPO28E1LKz0Tc2siRy3awmI2oRODanqWlfyibDJE2/qH6rlw/gK3hGAUplyyTXoU9vvPrdfSy/k0MyN3RPsPMabMobS0mFJRFpNejTJkp6PuS6429RNUZ5Ir7JQavLRcukNTl1PYUZJiMJOTV0BJ+RoqSox4b12ipbErEZt7B0VdrjbS61eTWVhORVkOssErfF3fSJ844Zn5JsOdYERBavpC+Yp2vi4GlTuDRIxFwm4pucpRbpyt51bnBCH9wv3s9S+WvVpen/CnxgkZZegMalTPzCVEICWDil3H+PCvTrK9Ss1Ey3UmQhY27zrEkQN7OHJ4G7mTdsb67cwY14gR/ygn3j3EgQPHOHGgUtzIaRxCSBlr93N47xYKq2vZcfxH/NVf72WjmFVGG55tzzM3QFNlUb29ghmng/6xeAcIMdrZhCs7g4LyLIK931LvVlC29yinTx7j/R/9JR9sNTDQ20PbiGd5cb2Yfc3F29h/+BgnTx1kl0WGWmGiatte3j1+jA9O7sEUkgs3d5qAa4Dvrk0QMdey9/AhDu07zLvbrDgmxhhI7CH4mBQsj9vCLLyNve/xl399QrSthfgmwaGgioyKHZz8i3/He9tLkYnB7oX1Wko5E2X4ntiMH4dTiNhUzqYd4vz39rGhzJzcksyJypRD7e4DHBN2fnRiF5aoCpc7IOzoyd8m7tmpExw9eIB3Tx3lnbQAkUkxCycbOxRLp3DzbvaLa0+8/2NO78rH9ugRD8a8BJ6bLxhySnln/wL5xtu5bpigeQeHTr7PqZPv8ZMPD1DhbKX33gDywoX6WTpv2psMXpvwlSoNcneEsF+4Ysm0hdAYjaQb9GjVSpTyKZxiJva03ePmxTN88vEnfHLxNuOhMBpxx+QBG80Xfs+vfvUP/Pqjj/n4XCMDtqmkpYXw4nievacWu5RkrdtBtVzEk4OPRGw3xoPGEPkZhZTlqHGPDeNKU2EUo70u3nkUBuHq5REa9DI6NiUc7OWQglKpjO//IezJxSAmZmuVSItvxBE/qklFoUwuhngcdE96abv7HefP/DMfffzPnLttJxDWiPLIZ/cNXQzaNNJNaeh1KaiUQRy2xdRrCeWcR0reZk7UWqDtIr/8v3/Hr/9NeHh2/5PYWKMRdlSz24spU0SfUTz2DiO4em/yxT/9I7/+9W/57UdnuNQ/ylMbh4syKZXy2fso12HOziH2aJpxYT+63Hzj7WwX4UpqFvrU2b2bNOZcilPceEZtuHxv6nLe07w24RvMRWTPuHEMT+DxP0/6c1GhEoLUmoxYhBuVL2Ko/LKNHPrJUXZszGLqnnAN2x4S1JkpyM3BmmVAm/K8PemeZy8Pw7xLFemlbK6IMTo5TM/9O9xVFGItKcMq3GSlcFvmv1Es/vVGUkS68B9f+4K5EJpWoRGiNWPNFfUQdSmtPcBP3n2HjXlpYthaDvHNP15vvRTpRew+eoSTh7ezPl8jPLozXGm4x6j3Bctizm4ufd7EfZsMY24uVquFDI3wHpOHFyIWEaLUykVTic9y8020s2I2nycLerHE5CUXg578hTuyvBm8NuGnWGvYuTHGUOu3fH2rixF3MPFut2BwCs/UNMHQQsvR6VgqcwmZMsmq2MS+Q0c4Jm7esX0bKDWn4HzYxoTawqa9Rzh1dD97asvJFKHEE2RiShK2p2dChBPmn2dPv0An0lO0cT3qsRFuXrqMrzCTghKLcA9TyClai9nlZWzYkdiDDxGjPnzQiypHT0G2GIAS18c7VXKQi5dl0oPHPUNAJMcf8HG4RNmWFRMI0rOozA1jysyiQri3R+L1EJ+D60uwiBhzeSy2Xi+BuOcaYx7r9xzlzz88zub0cWwjwzhfNBl4HnG7M4C2dBsHTxzjyP6trDcbxR2aw5QbV3xFPv5k0oyNns4e1FYjBTlGNMvNN93K+mIfPscAY65ZD8E32Mvd6Qy0ebmY4vHSD/rZm8fyJorFoM9nx+lTuM5dpeX8P9DxrXAlhVsWjSmwbhVx+h5j8sS5aMjbdoSN4/U0ffp3dOWY0QSFs6ktE/HUVjKLKtG2tnLu4yma0jPIlk3gDWcnrxVXW4qp0XbQ8vtf0le/leN/tkfEoc+yt4v1pZk/6NhphVvYbGjkdw0+andZKciaXaVOrzjM8bIvqb/4G/7bVQ0pshl8UyrWHVzPujw9ekd8hbeZu1+JvEpMvGMpoFLWQNO//ILB6/kUFeUicwsX9PviLg1tHtuPrcd+rZlP/083V8wa4lXRlb7D8b01lGYtJ8pUvLBeyu7kqcvE23eDr+vaGI6oUURtDNkslB8sISvtBYoxWakpucbNW1/wj2PXMGel4lRMI0tLHo8TneTBrTP8/e0YAbcHr09F9dFq1lpTmV5uvtpcth3dzNDlVv71F218KcKBoBhgfEXv8P6mcuLNrFign22tMr/8IPlHRPEf/uPf/HxwZCTxvr1MkymZ/CqQo83Ioygvmwy9FnWKGo0ulfTMbArLyii2ZmA0ZpJTWUVJQSZ64Z7FURvMIq4WM408hkKrQ6vRYzQLOyV55OXlYRJ2UnRCaEYzxeVrKK+ooKbYQpaIx1RaAxaTOKbVkmrIobjUSl5BAcUL2ssR5RKdIpHrHFQ6Ee+mYCraxMaaSgoyNInRUa4RsW+2mHGEaywT8aDGaKViyz72bKsiL10IRsTOWVlpok7ZFIh8c6xmckw6UjUaNPoMcgrKqKouZ82aaoqzM0nTajBk57O2Oh+rKZ6HcE91pqfbQ65Cl2mhskqENSYDGaLcGQYdsqgIX1K14mPAnF9ISa4JvfrpmsiEl/K0/bg5LRk5lVQV5yfaK97iL6qX8gd2XlTO2bweEwl4cU8FiaaI8or7k7d2J9s3VZEr2kZrsFBQVSVmaBOJXcTn2snJJC9Lh06rRqeLr6CXUFFTQUV1NbmZJgIDl6gbVlNYspbSzFTUqdlUbBVe4NZKctPVxJabr+g/6Zm5wpNMRR6TifhfR1bROvYd3M6mUhH3q2SiH/2wn5mNT9d7JdI7OIhKqcJqmfOyzdf9zr1I/DXO0ajoXIrZXWST6c8kEiYszo/E49D4NY8vSKSLji0CU8WTxEXwLHtLJRoR3quwI5OjTOzKm0xfkPjOufE8F3Pu4nnSlnGb8bZ8FWHnkuq1RB7bjrfDEts+UVeE2OaVqf/i3/LzqwaOfvDv+fPabJTxnZDnl/sl8o0z285idhQXLqmvrVD+KL/Hn49CqSQlRczK8Y6aTHsuCiXxXWfVqnk3LJGuXPqNeJa9pSI6V3xHXrVyMXbEuWKEXdy5i+dJWwq7r0T0cZZUryXy2PYy2j5R1wXKJFdlYUlNJ1UcS9zbhcr9EvnGmW3nZfS1N4C3r0YSqwJT5Ul+fOIQm/INK97FXolIwpd4I0nLrWFrbTVFmTpJ+MtAEr6ExCpEEr6ExCpEEr6ExCpEEr6ExCpEEr6ExCrkyQM8CqWCdIMhmSwhIfG2MTQyQlFeQeIBnoTwXR4P0dgLvrwgISHxxqOQK2cf2XW5PTG1OgWNeuHvU0tISLw9eKemkMsVyGKJL19LSEisHuD/A51YNghCpMniAAAAAElFTkSuQmCC"},28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>r});var n=s(96540);const t={},o=n.createContext(t);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);