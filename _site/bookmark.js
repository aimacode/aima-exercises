<script>
  window.onload = function(){
      document.write("Bookmarks");
      for (var i = 0, len = localStorage.length; i < len; ++i) {
          var key = localStorage.key(i);
          var value = localStorage.getItem(key);
          bookmark(key);
          document.write(key);
      }
  };
</script>
