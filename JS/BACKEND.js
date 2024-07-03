function usersHandler(request, response) {
  switch (request.type) {
    case "GET": { return response.json({ message: "GET METHOD" }) }
    case "POST": { return response.json({ message: "POST METHOD" }) }
    case "PUT": { return response.json({ message: "PUT METHOD" }) }
    case "DELETE": { return response.json({ message: "DELETE METHOD" }) }
    default: { return response.json({ message: "USERS API" }) }
  }
}

