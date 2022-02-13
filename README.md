
# FullStackApp

An App to read, retrive, upload stories and view then sorted my likes.




## Deployment

To deploy this project follow the instructions.

Firstly, build the server.
Open up a new Terminal for Server.

```bash
  cd server
  docker build -t node-app .
  docker run -p 5000:5000 -t node-app
```
Secondly, build the client.
Open up a new Terminal for Client.

```bash
  cd client
  docker build -t react-app .
  docker run -p 3000:3000 react-app
```

## Documentation

[Documentation](https://docs.google.com/document/d/1WFYSYvXX3IEGmndZq-RCnvJ22VUoIez-/edit?usp=sharing&ouid=105661433290822672834&rtpof=true&sd=true)

