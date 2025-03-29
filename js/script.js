document.addEventListener("DOMContentLoaded", function() {
    const languageSwitcher = document.getElementById("languageSwitcher");
    const content = document.getElementById("content");

    const texts = {
        en: {
            title: "Empowering DevOps for Your Business",
            description: "We provide cutting-edge DevOps solutions to streamline your development process.",
            additional: `<p>We specialize in continuous integration and delivery pipelines, automating your workflow for faster, more efficient releases.</p>
            <p>🚀 Automation | Observability | Cloud-Native</p>
                We are DevOps specialists, helping businesses optimize their infrastructures with automation, advanced monitoring, and efficient CI/CD practices. We work with Docker, Kubernetes, Terraform, GitLab CI/CD, Prometheus, Grafana, AWS, GCP, OCI Clouds, and much more!

                <p><ul class="simple_list">🔹 Our services:
                <li>✅ Infrastructure as Code (IaC)</li>
                <li>✅ Monitoring & Observability</li>
                <li>✅ Optimized CI/CD Pipelines</li>
                <li>✅ Cloud Security & DevSecOps</li>
                <li>✅ Support and Consulting</li>
                </ul></p>

                🔗 Follow us for updates and open-source projects!
`,
        },
        pt: {
            title: "Potencializando DevOps para o Seu Negócio",
            description: "Fornecemos soluções DevOps inovadoras para otimizar seu processo de desenvolvimento.",
            additional: `<p>Somos especializados em integração contínua e pipelines de entrega, automatizando seu fluxo de trabalho para releases mais rápidos e eficientes.</p>
            <p>🚀 Automação | Observabilidade | Cloud-Native</p>
                Somos especialistas em DevOps, ajudando empresas a otimizar suas infraestruturas com automação, monitoramento avançado e práticas de CI/CD eficientes. Trabalhamos com Docker, Kubernetes, Terraform, GitLab CI/CD, Prometheus, Grafana, Clouds AWS, GCP, OCI, e muito mais!

                <p><ul class="simple_list">🔹 Nossos serviços:
                <li>✅ Infraestrutura como Código (IaC)</li>
                <li>✅ Monitoramento & Observabilidade</li>
                <li>✅ Pipelines CI/CD Otimizados</li>
                <li>✅ Segurança em Cloud & DevSecOps</li>
                <li>✅ Suporte e Consultoria</li>
                </ul></p>

                🔗 Nos siga para novidades e projetos open-source!
`
        }
    };

    function updateLanguage() {
        const selectedLang = languageSwitcher.value;
        content.innerHTML = `
            <h2>${texts[selectedLang].title}</h2>
            <p>${texts[selectedLang].description}</p>
            ${texts[selectedLang].additional}
        `;
    }

    languageSwitcher.addEventListener("change", updateLanguage);
    updateLanguage();
});
