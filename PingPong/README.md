# Log output app

To deploy the application run:

```bash
kubectl apply -f manifests
```

To use ingress for handling routing, apply also the manifest(s) from the LogOutput
folder:

```bash
kubectl apply -f ../LogOutput/manifests
```

The app will be available at http://localhost:8081/pingpong
