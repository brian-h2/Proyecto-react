import React from 'react'

export const NavBar = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
      <a class="navbar-brand" href="../App.js">Planty</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent"/>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Interiores</a></li>
            <li><a class="dropdown-item" href="#">Exteriores</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Mixtos</a></li>
          </ul>
        </li>
        <li class="nav-item">
          
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAO9JREFUSEvNlN0VATEQhb/thE7ohFeKQBG8ohI6oRPOdTJ71m42GbvimNck95s7P6koHFVhfX4KeAQ3d+AMbL/hrunAAKY7B65jIbESLYBjEBdkVMQAE+AWVEe76GuyHMjJ0FAfp3rcB2i6GALJAiR6AWbAEjg5KeZ8Z1OY2gNrdp2NA2KTqPLoXXLRPm22JSS3cv2K3CZr2TahRPWjHifRkuYA5sJTJivPm2YO0Gx23biIg16nHoAmSfY90VlMD0DClmEKon+r87V4AZ7so3e8gD2wAg7AuqWUOsuOqWk1v/J2UqkzN6C4g+I9+F/AE7jxMhlT41/bAAAAAElFTkSuQmCC" href="#" alt="carrito" class="icono-carrito"/>
         
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
    </nav>
    </>

  )
}
