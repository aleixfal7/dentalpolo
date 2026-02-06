import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
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
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="logo-polo-falset.png" alt="Clínica Dental E. Polo - Dentista a Falset">
            <span class="logo-text">Clínica E. Polo</span>
          </div>
          <button class="mobile-menu-btn" (click)="toggleMenu()" [class.active]="menuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav class="nav" [class.open]="menuOpen">
            <a href="#inici" (click)="closeMenu()">Inici</a>
            <a href="#serveis" (click)="closeMenu()">Serveis</a>
            <a href="#equip" (click)="closeMenu()">Qui som</a>
            <a href="#contacte" (click)="closeMenu()">Contacte</a>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <section id="inici" class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title animate-fade-in">La teva Clínica Dental de confiança a Falset</h1>
          <p class="hero-subtitle animate-fade-in">Cuidem del teu somriure amb professionalitat i dedicació</p>
          <a href="#contacte" class="cta-button animate-fade-in">Demana cita</a>
        </div>
      </section>

      <section id="serveis" class="services">
        <div class="container">
          <h2 class="section-title">Els nostres Serveis</h2>
          <p class="section-subtitle">Tractaments dentals professionals al Priorat</p>

          <div class="services-grid">
            <div class="service-card" *ngFor="let service of services">
              <div class="service-icon">{{ service.icon }}</div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="equip" class="team">
        <div class="container">
          <h2 class="section-title">El nostre Equip</h2>
          <p class="section-subtitle">Professionals dedicats a la teva salut bucodental</p>

          <div class="team-grid">
            <div class="team-member" *ngFor="let member of teamMembers">
              <div class="member-image">
                <img [src]="member.image" [alt]="member.name + ' - Dentista a Falset'">
              </div>
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-title">{{ member.title }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacte" class="contact">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info">
              <h2 class="section-title">Contacte i Horaris</h2>

              <div class="info-block">
                <h3 class="info-title">📍 Direcció</h3>
                <p>Avinguda Catalunya<br>43730 Falset (Tarragona)</p>
              </div>

              <div class="info-block">
                <h3 class="info-title">📞 Telèfon</h3>
                <p><a href="tel:977830988">977 830 988</a></p>
              </div>

              <div class="info-block">
                <h3 class="info-title">🕐 Horari</h3>
                <div class="status-badge" [class.open]="isOpen" [class.closed]="!isOpen">
                  {{ isOpen ? '🟢 Obert ara' : '🔴 Tancat ara' }}
                </div>
                <div class="schedule-list">
                  <div class="schedule-item" *ngFor="let schedule of schedules">
                    <span class="schedule-day">{{ schedule.day }}</span>
                    <span class="schedule-hours">{{ schedule.hours }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.9288436647!2d0.8324!3d41.1547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a72e5f8e5e5e5f%3A0x5e5e5e5e5e5e5e5!2sAvinguda%20Catalunya%2C%20Falset%2C%20Tarragona!5e0!3m2!1sca!2ses!4v1234567890"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicació Clínica Dental E. Polo a Falset">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Clínica Dental E. Polo</h4>
            <p>La teva clínica dental de confiança a Falset i la comarca del Priorat.</p>
          </div>

          <div class="footer-section">
            <h4>Contacte</h4>
            <p>Avinguda Catalunya<br>43730 Falset (Tarragona)<br>Tel: 977 830 988</p>
          </div>

          <div class="footer-section">
            <h4>Horari</h4>
            <p>Dl, Dj, Dv: 9:00-13:00 i 15:00-17:00<br>Dm: 9:00-13:00 i 16:00-20:00<br>Dc, Ds, Dg: Tancat</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Clínica Dental E. Polo. Tots els drets reservats.</p>
          <div class="footer-links">
            <a href="#avis-legal">Avís Legal</a>
            <a href="#privacitat">Política de Privacitat</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `
})

export class App implements OnInit {
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

bootstrapApplication(App);