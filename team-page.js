
document.addEventListener('DOMContentLoaded', function() {
    const socialData = {
      'anjanna-reddy': { instagram: 'https://www.instagram.com/papillon_dme', linkedin: 'https://www.linkedin.com/in/anjanna-reddy-65586724a/' },
      'rishikesh': { instagram: 'https://www.instagram.com/rishi_.25_', linkedin: 'https://www.linkedin.com/in/rishikesh-parupally-924644340/' },
      'nikshiptha': { instagram: 'https://www.instagram.com/niks_jns', linkedin: 'https://www.linkedin.com/in/nikshiptha-sree-4a1790355/' },
      'kaushik': { instagram: 'https://www.instagram.com/imsk_king', linkedin: 'https://www.linkedin.com/in/kaushik-surapalli-993974285/' },
      'uday': { linkedin: 'https://www.linkedin.com/in/udaykiran2427' },
      'surya': { instagram: 'https://www.instagram.com/__mr__surya_____', linkedin: 'https://www.linkedin.com/in/surya-prakash-ullamparthi-9787092b8/' },
      'dheeraj': { instagram: 'https://www.instagram.com/__sunny_0506__', linkedin: 'https://www.linkedin.com/in/dheeraj-kumar-goud' },
      'arun': { instagram: 'https://www.instagram.com/arunnn_patell', linkedin: 'https://www.linkedin.com/in/inumula-arunkumar-918959313/' },
      'sanjay': { instagram: 'https://www.instagram.com/sanjay_07_04', linkedin: 'https://www.linkedin.com/in/sanjay-kumar-70p/' },
      'prantha': { instagram: 'https://www.instagram.com/pranitha_balivada', linkedin: 'https://www.linkedin.com/in/pranitha-balivada' },
      'syam': { instagram: 'https://www.instagram.com/shyamsai2906', linkedin: 'https://www.linkedin.com/in/settipalli-syam-sai-770380350/' },
      'rikith': { instagram: 'https://www.instagram.com/rikith_madimala', linkedin: 'https://www.linkedin.com/in/rikith-madimala-698b4b343/' }
    };
  
    const teamCards = document.querySelectorAll('.Steering-team-card, .subteam_card');
    
    teamCards.forEach(card => {
      const id = card.getAttribute('data-social');
      if (socialData[id]) {
        const icons = document.createElement('div');
        icons.className = 'team-social-icons';
        
        if (socialData[id].instagram) {
          icons.innerHTML += `
            <a href="${socialData[id].instagram}" target="_blank" class="social-icon instagram">
              <i class="fab fa-instagram"></i>
            </a>
          `;
        }
        
        if (socialData[id].linkedin) {
          icons.innerHTML += `
            <a href="${socialData[id].linkedin}" target="_blank" class="social-icon linkedin">
              <i class="fab fa-linkedin-in"></i>
            </a>
          `;
        }
        
        card.insertBefore(icons, card.firstChild);
      }
    });
  });