# Todo app

To deploy the application run:

```bash
kubectl apply -f manifests
```

To use port-forwarding to access the app in http://localhost:3000/

```bash
kubectl kubectl port-forward todoapp 3000:3000
```
Replace the name of the pod and used port for you own values.