<template>
  <div class="about">
    <div class="container mt-5 px-5">
      <h1>ABOUT ME</h1>
      <img src="../assets/yutaka.jpeg" alt="" class="my-3">
      <div class="row">
        <table class="table col-lg-10 mt-4 mx-auto">
          <thead>
            <tr>
              <th>KEY</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Yutaka</td>
            </tr>
            <tr>
              <td>Stay</td>
              <td>Cebu</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>26</td>
            </tr>
            <tr>
              <td>Qiita</td>
              <td><a href="https://qiita.com/YutakaYamasaki">YutakaYamasaki</a></td>
            </tr>
            <tr>
              <td>Github</td>
              <td><a href="https://github.com/YutakaYamasaki">YutakaYamasaki</a></td>
            </tr>
            <tr>
              <td>Twitter</td>
              <td><a href="https://twitter.com/y_yutaka0506">y_yutaka0506</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
  img {
    width: 200px;
    border-radius: 50%;
  }
  th {
    background-color:rgba(65,184,131,0.5);
    color:white;
  }
  tr td a {
  color: rgba(65,184,131);
  }
  tr td a:hover {
  color: rgba(244,172,23);
  text-decoration: none;
  }
</style>
