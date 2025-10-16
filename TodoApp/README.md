# Todo app

## To deploy the application run:

```bash
kubectl apply -f manifests
```

## To use port-forwarding to access the app in http://localhost:3000/ run:

```bash
kubectl kubectl port-forward todoapp 3000:3000
```
Replace the name of the pod and used port for you own values.

## When using NodePort service create cluster like this:

```bash
k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2

# apply manifests when cluster is created
kubectl apply -f manifests
```
The app will then be available at http://localhost:8082/
