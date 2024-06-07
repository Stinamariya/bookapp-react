import React from 'react'

const NavBar = () => {
  return (
    <div>
        <br />

<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LIBRARY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ADD BOOK</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SEARCH</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">DELETE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="3">VIEW</a>
        </li>
      </ul>
      <br />
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar