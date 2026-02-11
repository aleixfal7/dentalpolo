import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

interface Schedule {
  day: string;
  hours: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;
  isOpen = false;

  services: Service[] = [
    { icon: '🦷', title: 'Periodòncia', description: 'Tractem les malalties de les genives i l\'os que dona suport a les dents. Prevenim i curem la gingivitis i periodontitis per mantenir les teves dents fortes i saludables.' },
    { icon: '⚕️', title: 'Implantologia', description: 'Substituïm les dents perdudes amb implants dentals de màxima qualitat. Recupera la funcionalitat i estètica del teu somriure amb solucions duradores i naturals.' },
    { icon: '😁', title: 'Ortodòncia', description: 'Corregim la posició de les dents i la mandíbula amb tractaments d\'ortodòncia personalitzats. Brackets tradicionals o alineadors invisibles per aconseguir el somriure perfecte.' },
    { icon: '🦴', title: 'Pròtesi', description: 'Dissenyem i col·loquem pròtesis dentals fixes i removibles de gran qualitat. Recupera la funcionalitat masticatòria i l\'estètica del teu somriure.' },
    { icon: '🔬', title: 'Endodòncia', description: 'Tractem l\'interior de la dent per eliminar infeccions i salvar peces dentals. Endodòncies realitzades amb tecnologia de punta i màxima precisió.' },
    { icon: '👶', title: 'Odontopediatria', description: 'Cuidem de la salut dental dels més petits amb tractaments adaptats i un ambient proper i familiar. Prevenció i tractament de caries infantils.' },
    { icon: '✨', title: 'Estètica dental', description: 'Millorem l\'aparença del teu somriure amb blanquejaments dentals, caretes de porcellana i reconstruccions estètiques. Llueix un somriure blanc i radiant.' },
    { icon: '🏥', title: 'Odontologia general', description: 'Revisions periòdiques, neteja dental professional, empastaments i tractaments preventius. Mantenim la teva salut bucodental en òptimes condicions.' }
  ];

  teamMembers: TeamMember[] = [
    { name: 'Dra. Maria Bladé', title: 'Odontòloga Col·legiada', image: 'equip-polo-falset.png' },
    { name: 'Dra. Elvira Gómez', title: 'Especialista en Ortodòncia', image: 'elvira-gomez-falset.jpeg' },
    { name: 'Dr. Enric Polo', title: 'Director i Implantòleg', image: 'equip-polo-falset.png' },
    { name: 'Hig. Carmen Brull', title: 'Higienista Dental', image: 'equip-polo-falset.png' }
  ];

  schedules: Schedule[] = [
    { day: 'Dilluns', hours: '9:00-13:00 i 15:00-17:00' },
    { day: 'Dimarts', hours: '9:00-13:00 i 16:00-20:00' },
    { day: 'Dimecres', hours: 'Tancat' },
    { day: 'Dijous', hours: '9:00-13:00 i 15:00-17:00' },
    { day: 'Divendres', hours: '9:00-13:00 i 15:00-17:00' },
    { day: 'Dissabte', hours: 'Tancat' },
    { day: 'Diumenge', hours: 'Tancat' }
  ];

  ngOnInit() {
    this.checkIfOpen();
    this.setupScrollListener();
    this.setupIntersectionObserver();
    setInterval(() => {
      this.checkIfOpen();
    }, 60000);
  }

  checkIfOpen() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;
    if (day === 0 || day === 3 || day === 6) {
      this.isOpen = false;
      return;
    }
    if (day === 2) {
      this.isOpen = (currentTime >= 9 && currentTime < 13) || (currentTime >= 16 && currentTime < 20);
    } else {
      this.isOpen = (currentTime >= 9 && currentTime < 13) || (currentTime >= 15 && currentTime < 17);
    }
  }

  setupScrollListener() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    setTimeout(() => {
      document.querySelectorAll('.service-card, .team-member, .info-block').forEach(el => {
        observer.observe(el);
      });
    }, 100);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
