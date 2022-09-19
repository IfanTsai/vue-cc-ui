<template>
  <div class="top-nav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>menu1</li>
      <li>menu2</li>
    </ul>
  </div>
</template>

<sytle lang="scss" scoped>
.top-nav {
  background: skyblue;
  display: flex;
  padding: 16px;

  >.logo {
    max-width: 6em;
    margin-right: auto;
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
    }
  }
}
</sytle>