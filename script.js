
        // Adicione este script no final do body
        window.addEventListener('load', () => {
            // Esconde a tela de loading após 1 segundo
            setTimeout(() => {
                const loadingScreen = document.querySelector('.loading-screen');
                loadingScreen.classList.add('hidden');

                // Remove a tela de loading do DOM após a animação
                setTimeout(() => {
                    loadingScreen.remove();
                    document.body.classList.remove('loading');
                }, 500);
            }, 3000);
        });

        // Animação do Cursor
        const cursor = document.querySelector('.custom-cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Efeito de Hover no Cursor
        document.querySelectorAll('a, button, .hover-effect').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.opacity = '0.5';
            });
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.opacity = '1';
            });
        });

        // Animação ao Scroll
        // Scripts otimizados
        document.addEventListener('DOMContentLoaded', () => {
            // Animação ao Scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            }, { threshold: 0.15 });

            document.querySelectorAll('.project-card, .tech-item, .specialization-card').forEach((el) => {
                el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-500');
                observer.observe(el);
            });
        });

        // Smooth scroll para o link TOP
        // Scroll suave para o topo
        document.querySelectorAll('.scroll-top').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });

        // Microinterações na timeline
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(8px)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
            });
        });

        // Otimização mobile
        function handleResize() {
            if (window.innerWidth < 768) {
                document.querySelector('.specializations-grid').classList.add('space-y-4');
            } else {
                document.querySelector('.specializations-grid').classList.remove('space-y-4');
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Executa no carregamento