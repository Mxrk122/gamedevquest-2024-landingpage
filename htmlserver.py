from livereload import Server, shell

# Cambia 'index.html' al archivo principal de tu proyecto
server = Server()

# Observa todos los archivos HTML, CSS y JavaScript en tu proyecto
server.watch('*.html')
server.watch('css/*.css')
server.watch('js/*.js')
server.watch('sections/*.html')


# Sirve los archivos en el puerto 8000
server.serve(root='.', port=8000)
