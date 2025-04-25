const albumData = {
    album1: ['album1-img1.jpg', 'album1-img2.jpg', 'album1-img3.jpg'],
    album2: ['album2-img1.jpg', 'album2-img2.jpg', 'album2-img3.jpg'],
    album3: ['album3-img1.jpg', 'album3-img2.jpg', 'album3-img3.jpg'],
    album4: ['album4-img1.jpg', 'album4-img2.jpg', 'album4-img3.jpg'],
    album5: ['album5-img1.jpg', 'album5-img2.jpg', 'album5-img3.jpg'],
    album6: ['album6-img1.jpg', 'album6-img2.jpg', 'album6-img3.jpg'],
  };
  
  function openAlbum(albumId) {
    const modal = document.getElementById('modal');
    const albumContent = document.getElementById('albumContent');
    
    albumContent.innerHTML = '';
  
    albumData[albumId].forEach(imgSrc => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = `Imagen de ${albumId}`;
      img.style.width = '100%';
      img.style.marginBottom = '10px';
      albumContent.appendChild(img);
    });
  
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  