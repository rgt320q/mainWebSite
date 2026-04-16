// JavaScript for animations and interactive elements

const translations = {
    tr: {
           page_title: "mrCetin Danışmanlık ve Digital çözümler",
           nav_applications: "Çözümlerimiz",
        nav_about_us: "Biz Kimiz",
        nav_vision: "Vizyon",
        nav_mission: "Misyon",
        nav_contact: "İletişim",
           hero_title: "Danışmanlık ve dijital çözümler.",
           hero_subtitle: "İhtiyaçlarınızı analiz ediyor, çözümler üretiyor ve bu çözümleri dijital dünyaya taşıyoruz.",
           hero_button: "Çözümlerimizi Keşfedin",
           applications_title: "Çözümlerimiz",
           applications_text: "Çözüm örneklerimiz",
           game_project_1_title: "Oyun Projesi 1",
           game_project_1_description: "Heyecan verici, nostaljik ve yüksek rekabet içeren bir oyun. Şu anda geliştirme aşamasında.",
           game_project_2_title: "Stok ve Maliyet Yönetimi Çözümleri",
           game_project_2_description: "Menü mühendisliği, stok yönetimi ve maliyet optimizasyonu için geliştirilen çözümler. Geliştirme aşamasında.",
        mobile_app_project_title: "Mobil Uygulama Projesi",
        mobile_app_project_description: "Gezi deneyiminizi zenginleştirecek ve rotanızı daha eksiksiz hale getirecek bir uygulama. Yakında kullanıma sunulacak.",
        status_in_development: "Geliştirme Aşamasında",
        status_coming_soon: "Yakında Kullanıma Sunulacaktır",
        about_us_title: "Biz Kimiz",
        about_us_text_p1: "Danışmanlık, yönetim ve organizasyonel sistem yönetimi, dijital uygulama ve dijital ürün geliştirme süreçlerinde; yüksek teknik doğruluk, güvenlik ve sürdürülebilirlik ilkeleriyle hareket eden danışmanlık ve teknoloji iletişimi stüdyosuyuz.",
        about_us_text_p2: "Karmaşık altyapıları sadeleştiren, süreçleri otomasyonla optimize eden ve her adımı belgelenmiş biçimde sunan bir yaklaşım benimsiyoruz.",
        about_us_text_p3: "Danışmanlık, Uygulama mimarisi, veri güvenliği, kullanıcı deneyimi ve iletişim altyapısı gibi kritik bileşenlerde; hem mühendislik hem de strateji odaklı çözümler geliştiriyoruz.",
        about_us_text_p4: "Her proje, sadece işlevsel değil; aynı zamanda kurumsal kimliğe entegre, uzun vadeli başarıya uygun ve teknik olarak sürdürülebilir olacak şekilde tasarlanır.",
        about_us_text_p5: "Markaların dijital dünyada güçlü bir iz bırakabilmesi için; teknik altyapılarını profesyonelce yapılandırıyor, iletişim dillerini stratejik biçimde şekillendiriyoruz.",
        about_us_text_p6: "Çünkü biz, çözümlerimizin yalnızca geliştiricisi değil; onları geleceğe taşıyan, rehberlik eden ve değer üreten bir çözüm ortağıyız.",
        vision_title: "Vizyon",
        vision_text: "Danışmanlık, bilgi güvenliği, sistem sürdürülebilirliği ve dijital iletişimde mükemmeliyet ilkesiyle; kurumların teknik altyapılarını sade, güvenli ve ölçeklenebilir biçimde inşa ederek dijital dünyada iz bırakan bir referans noktası olmak. Yüksek doğrulukla yapılandırılmış sistemler ve stratejik iletişim çözümleriyle; teknolojiye yön veren, rehberlik eden ve değer üreten bir ekosistem oluşturmayı hedefliyoruz.",
        mission_title: "Misyon",
        mission_text: "Karmaşık teknolojik süreçleri sadeleştirerek; e-posta güvenliği, zincirli sertifika entegrasyonu, otomasyon ve marka iletişimi alanlarında bütüncül çözümler sunmak. Her projede teknik doğruluk, sürdürülebilirlik ve kullanıcı odaklılık ilkeleriyle hareket ederek; kurumların dijital varlıklarını güvenli, profesyonel ve etkili biçimde konumlandırmalarını sağlıyoruz.",
        contact_title: "İletişim",
        contact_text: "İhtiyaçlarınızı belirleyip, çözümlerimizi konuşmak için bizimle iletişime geçin.",
        contact_address: "Çekmeköy, İstanbul, Türkiye",
        contact_phone: "Telefon: +9 0531 932 33 96",
        contact_email: "E-posta: info@mrcetin.com",
        footer_privacy: "Gizlilik Politikası",
        footer_cookies: "Çerezlerin Kullanımı",
        footer_terms: "Kullanım Şartları",
        footer_legal: "Yasal",
        footer_sitemap: "Site Haritası",
        footer_copyright: "© 2025 mrCetin Studios. Tüm Hakları Saklıdır.",
        privacy_policy_title: "Gizlilik Politikası",
        privacy_policy_text: "Bu gizlilik politikası, mrCetin Studios'in kişisel verilerinizi nasıl topladığını, kullandığını, ifşa ettiğini ve koruduğunu açıklar. Hizmetlerimizi kullanarak, bu politikada açıklanan uygulamaları kabul etmiş olursunuz. Veri güvenliğiniz bizim için önemlidir ve verilerinizi korumak için gerekli tüm önlemleri alıyoruz. Topladığımız veriler, hizmetlerimizi iyileştirmek, size daha iyi bir deneyim sunmak ve yasal yükümlülüklerimizi yerine getirmek amacıyla kullanılır. Verilerinizi üçüncü taraflarla izniniz olmadan paylaşmayız, ancak yasal gereklilikler veya hizmet sağlayıcılarımızla işbirliği durumları istisna teşkil edebilir. Gizlilik haklarınızla ilgili daha fazla bilgi için lütfen bizimle iletişime geçin.",
        cookie_policy_title: "Çerezlerin Kullanımı",
        cookie_policy_text: "Web sitemiz, kullanıcı deneyiminizi geliştirmek ve hizmetlerimizi analiz etmek için çerezler kullanır. Çerezler, tarayıcınız tarafından bilgisayarınızda depolanan küçük metin dosyalarıdır. Bu çerezler, tercihlerinizi hatırlamamıza, site trafiğini analiz etmemize ve size kişiselleştirilmiş içerik sunmamıza yardımcı olur. Çerezleri istediğiniz zaman tarayıcı ayarlarınızdan kontrol edebilir ve silebilirsiniz. Ancak, çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özelliklerinin düzgün çalışmayabileceğini lütfen unutmayın. Daha fazla bilgi için çerez politikamızı inceleyebilirsiniz.",
        terms_of_use_title: "Kullanım Şartları",
        terms_of_use_text: "mrCetin Studios web sitesini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş olursunuz. Bu şartlar, web sitemizin kullanımı, içeriği, fikri mülkiyet hakları ve sorumluluk sınırlamaları ile ilgili hükümler içerir. Web sitemizdeki içerikler yalnızca genel bilgi amaçlıdır ve herhangi bir yasal tavsiye niteliği taşımaz. Hizmetlerimizi kötüye kullanmamanız, yasa dışı faaliyetlerde bulunmamanız ve diğer kullanıcıların haklarına saygı göstermeniz beklenir. Bu şartları ihlal etmeniz durumunda, hizmetlerimize erişiminiz kısıtlanabilir veya sonlandırılabilir. Lütfen bu şartları dikkatlice okuyunuz.",
        legal_notice_title: "Yasal Bildirim",
        legal_notice_text: "Bu yasal bildirim, mrCetin Studios'in yasal bilgilerini, şirket detaylarını ve telif hakkı beyanlarını içerir. Web sitemizdeki tüm içerikler, metinler, grafikler, logolar ve yazılımlar mrCetin Studios'e aittir veya lisanslıdır ve telif hakkı yasalarıyla korunmaktadır. İzinsiz çoğaltma, dağıtım veya kullanım yasaktır. Web sitemizde yer alan bilgiler iyi niyetle sunulmuştur, ancak doğruluğu veya eksiksizliği konusunda garanti verilmez. Herhangi bir yasal sorunuz veya endişeniz varsa, lütfen yetkili bir hukuk danışmanına başvurunuz.",
        sitemap_title: "Site Haritası",
        sitemap_text: "mrCetin Studios web sitesinin tüm sayfalarına hızlı erişim için site haritası. Ana Sayfa, Uygulamalarımız, Biz Kimiz, Vizyon, Misyon, İletişim, Gizlilik Politikası, Çerezlerin Kullanımı, Kullanım Şartları, Yasal Bildirim gibi ana bölümleri içerir. Bu harita, web sitemizde gezinmenizi kolaylaştırmak ve aradığınız bilgilere daha hızlı ulaşmanızı sağlamak amacıyla hazırlanmıştır. Herhangi bir sayfa bağlantısının çalışmaması durumunda lütfen bizimle iletişime geçin."
    },
    en: {
        page_title: "mrCetin Consultancy and Digital Solutions",
        nav_applications: "Our Solutions",
        nav_about_us: "Who We Are",
        nav_vision: "Vision",
        nav_mission: "Mission",
        nav_contact: "Contact",
        hero_title: "Consultancy and digital solutions.",
        hero_subtitle: "We analyze your needs, produce solutions, and carry these solutions to the digital world.",
        hero_button: "Discover Our Solutions",
        applications_title: "Our Solutions",
        applications_text: "Our solution examples",
        game_project_1_title: "Game Project 1",
        game_project_1_description: "An exciting, nostalgic, and highly competitive game. Currently under development.",
        game_project_2_title: "Stock and Cost Management Solutions",
        game_project_2_description: "Solutions developed for menu engineering, inventory management, and cost optimization. Under development.",
        mobile_app_project_title: "Mobile Application Project",
        mobile_app_project_description: "An application that will enrich your travel experience and make your route more complete. Coming soon.",
        status_in_development: "Under Development",
        status_coming_soon: "Coming Soon",
        about_us_title: "Who We Are",
        about_us_text_p1: "We are a consulting and technology communication studio that operates with principles of high technical accuracy, security, and sustainability in consulting, management and organizational system management, digital application, and digital product development processes.",
        about_us_text_p2: "We adopt an approach that simplifies complex infrastructures, optimizes processes with automation, and presents every step in a documented manner.",
        about_us_text_p3: "In critical components such as consulting, application architecture, data security, user experience, and communication infrastructure; we develop both engineering and strategy-oriented solutions.",
        about_us_text_p4: "Every project is designed to be not only functional but also integrated into the corporate identity, suitable for long-term success, and technically sustainable.",
        about_us_text_p5: "To enable brands to leave a strong mark in the digital world; we professionally structure their technical infrastructures and strategically shape their communication languages.",
        about_us_text_p6: "Because we are not just the developers of our solutions; we are a solution partner that carries them into the future, guides them, and creates value.",
        vision_title: "Vision",
        vision_text: "To be a reference point that leaves a mark in the digital world by building the technical infrastructures of institutions in a simple, secure, and scalable manner, with the principle of excellence in consultancy, information security, system sustainability, and digital communication. With highly accurately structured systems and strategic communication solutions; we aim to create an ecosystem that directs technology, provides guidance, and creates value.",
        mission_title: "Mission",
        mission_text: "To simplify complex technological processes by offering holistic solutions in the areas of email security, chained certificate integration, automation, and brand communication. In every project, acting with the principles of technical accuracy, sustainability, and user-focus; we enable institutions to position their digital assets in a secure, professional, and effective manner.",
        contact_title: "Contact",
        contact_text: "Contact us to determine your needs and discuss our solutions.",
        contact_address: "Çekmeköy, Istanbul, Turkey",
        contact_phone: "Phone: +9 0531 932 33 96",
        contact_email: "Email: info@mrcetin.com",
        footer_privacy: "Privacy Policy",
        footer_cookies: "Use of Cookies",
        footer_terms: "Terms of Use",
        footer_legal: "Legal",
        footer_sitemap: "Sitemap",
        footer_copyright: "© 2025 mrCetin Studios. All Rights Reserved.",
        privacy_policy_title: "Privacy Policy",
        privacy_policy_text: "This privacy policy explains how mrCetin Studios collects, uses, discloses, and protects your personal data. By using our services, you agree to the practices described in this policy. Your data security is important to us, and we take all necessary measures to protect your data. The data we collect is used to improve our services, provide you with a better experience, and fulfill our legal obligations. We do not share your data with third parties without your consent, but legal requirements or collaborations with our service providers may constitute exceptions. Please contact us for more information about your privacy rights.",
        cookie_policy_title: "Use of Cookies",
        cookie_policy_text: "Our website uses cookies to improve your user experience and analyze our services. Cookies are small text files stored on your computer by your browser. These cookies help us remember your preferences, analyze site traffic, and provide you with personalized content. You can control and delete cookies at any time through your browser settings. However, please note that some features of our website may not function properly if you disable cookies. For more information, you can review our cookie policy.",
        terms_of_use_title: "Terms of Use",
        terms_of_use_text: "By using the mrCetin Studios website, you agree to the following terms of use. These terms include provisions regarding the use of our website, its content, intellectual property rights, and limitations of liability. The content on our website is for general informational purposes only and does not constitute legal advice. You are expected not to misuse our services, engage in illegal activities, and respect the rights of other users. If you violate these terms, your access to our services may be restricted or terminated. Please read these terms carefully.",
        legal_notice_title: "Legal Notice",
        legal_notice_text: "This legal notice contains mrCetin Studios's legal information, company details, and copyright statements. All content on our website, including texts, graphics, logos, and software, is owned by or licensed to mrCetin Studios and is protected by copyright laws. Unauthorized reproduction, distribution, or use is prohibited. The information on our website is provided in good faith, but no guarantee is given as to its accuracy or completeness. If you have any legal questions or concerns, please consult a qualified legal advisor.",
        sitemap_title: "Sitemap",
        sitemap_text: "Sitemap for quick access to all pages of the mrCetin Studios website. It includes main sections such as Home, Our Applications, About Us, Vision, Mission, Contact, Privacy Policy, Use of Cookies, Terms of Use, Legal Notice. This map has been prepared to facilitate your navigation on our website and to help you find the information you are looking for more quickly. Please contact us if any page link is not working."
    },
    de: {
        page_title: "mrCetin Beratung und digitale Lösungen",
        nav_applications: "Unsere Lösungen",
        nav_about_us: "Wer wir sind",
        nav_vision: "Vision",
        nav_mission: "Mission",
        nav_contact: "Kontakt",
        hero_title: "Beratung und digitale Lösungen.",
        hero_subtitle: "Wir analysieren Ihre Bedürfnisse, entwickeln Lösungen und bringen diese Lösungen in die digitale Welt.",
        hero_button: "Entdecken Sie unsere Lösungen",
        applications_title: "Unsere Lösungen",
        applications_text: "Lösungsbeispiele",
        game_project_1_title: "Spielprojekt 1",
        game_project_1_description: "Ein aufregendes, nostalgisches und sehr wettbewerbsintensives Spiel. Derzeit in Entwicklung.",
        game_project_2_title: "Lager- und Kostenmanagementlösungen",
        game_project_2_description: "Lösungen für Menü-Engineering, Bestandsverwaltung und Kostenoptimierung. In Entwicklung.",
        mobile_app_project_title: "Mobile Anwendungsprojekt",
        mobile_app_project_description: "Eine Anwendung, die Ihr Reiseerlebnis bereichern und Ihre Route vollständiger machen wird. Bald verfügbar.",
        status_in_development: "In Entwicklung",
        status_coming_soon: "Bald verfügbar",
        about_us_title: "Wer wir sind",
        about_us_text_p1: "Wir sind ein Beratungs- und Technologiekommunikationsstudio, das nach den Prinzipien hoher technischer Genauigkeit, Sicherheit und Nachhaltigkeit in den Prozessen der Beratung, des Managements und des organisatorischen Systemmanagements, der digitalen Anwendung und der digitalen Produktentwicklung handelt.",
        about_us_text_p2: "Wir verfolgen einen Ansatz, der komplexe Infrastrukturen vereinfacht, Prozesse durch Automatisierung optimiert und jeden Schritt dokumentiert präsentiert.",
        about_us_text_p3: "In kritischen Komponenten wie Beratung, Anwendungsarchitektur, Datensicherheit, Benutzererfahrung und Kommunikationsinfrastruktur entwickeln wir sowohl ingenieur- als auch strategieorientierte Lösungen.",
        about_us_text_p4: "Jedes Projekt ist nicht nur funktional, sondern auch so konzipiert, dass es in die Unternehmensidentität integriert, für langfristigen Erfolg geeignet und technisch nachhaltig ist.",
        about_us_text_p5: "Damit Marken in der digitalen Welt einen starken Eindruck hinterlassen können, strukturieren wir ihre technische Infrastruktur professionell und gestalten ihre Kommunikationssprachen strategisch.",
        about_us_text_p6: "Denn wir sind nicht nur die Entwickler unserer Lösungen, sondern auch ein Lösungspartner, der sie in die Zukunft trägt, anleitet und Werte schafft.",
        vision_title: "Vision",
        vision_text: "Mit dem Prinzip der Exzellenz in Beratung, Informationssicherheit, Systemnachhaltigkeit und digitaler Kommunikation; ein Referenzpunkt in der digitalen Welt zu sein, der Spuren hinterlässt, indem er die technische Infrastruktur von Institutionen einfach, sicher und skalierbar aufbaut. Mit hochpräzisen Systemen und strategischen Kommunikationslösungen streben wir danach, ein Ökosystem zu schaffen, das Technologie vorantreibt, anleitet und Werte schafft.",
        mission_title: "Mission",
        mission_text: "Durch die Vereinfachung komplexer technologischer Prozesse; ganzheitliche Lösungen in den Bereichen E-Mail-Sicherheit, Kettenzertifikatsintegration, Automatisierung und Markenkommunikation anzubieten. Indem wir in jedem Projekt nach den Prinzipien der technischen Genauigkeit, Nachhaltigkeit und Benutzerorientierung handeln, stellen wir sicher, dass Institutionen ihre digitalen Assets sicher, professionell und effektiv positionieren.",
        contact_title: "Kontakt",
        contact_text: "Kontaktieren Sie uns, um Ihre Bedürfnisse zu ermitteln und unsere Lösungen zu besprechen.",
        contact_address: "Çekmeköy, Istanbul, Türkei",
        contact_phone: "Telefon: +9 0531 932 33 96",
        contact_email: "E-Mail: info@mrcetin.com",
        footer_privacy: "Datenschutzrichtlinie",
        footer_cookies: "Verwendung von Cookies",
        footer_terms: "Nutzungsbedingungen",
        footer_legal: "Rechtliches",
        footer_sitemap: "Sitemap",
        footer_copyright: "© 2025 mrCetin Studios. Alle Rechte vorbehalten.",
        privacy_policy_title: "Datenschutzrichtlinie",
        privacy_policy_text: "Diese Datenschutzrichtlinie erklärt, wie mrCetin Studios Ihre persönlichen Daten sammelt, verwendet, offenlegt und schützt. Durch die Nutzung unserer Dienste stimmen Sie den in dieser Richtlinie beschriebenen Praktiken zu. Die Sicherheit Ihrer Daten ist uns wichtig und wir ergreifen alle notwendigen Maßnahmen, um Ihre Daten zu schützen. Die von uns gesammelten Daten werden verwendet, um unsere Dienste zu verbessern, Ihnen ein besseres Erlebnis zu bieten und unseren gesetzlichen Verpflichtungen nachzukommen. Wir geben Ihre Daten ohne Ihre Zustimmung nicht an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben oder erfolgt in Zusammenarbeit mit unseren Dienstleistern. Für weitere Informationen zu Ihren Datenschutzrechten kontaktieren Sie uns bitte.",
        cookie_policy_title: "Verwendung von Cookies",
        cookie_policy_text: "Unsere Website verwendet Cookies, um Ihr Nutzererlebnis zu verbessern und unsere Dienste zu analysieren. Cookies sind kleine Textdateien, die von Ihrem Browser auf Ihrem Computer gespeichert werden. Diese Cookies helfen uns, Ihre Präferenzen zu speichern, den Website-Verkehr zu analysieren und Ihnen personalisierte Inhalte anzubieten. Sie können Cookies jederzeit über Ihre Browsereinstellungen kontrollieren und löschen. Bitte beachten Sie jedoch, dass einige Funktionen unserer Website möglicherweise nicht richtig funktionieren, wenn Sie Cookies deaktivieren. Weitere Informationen finden Sie in unserer Cookie-Richtlinie.",
        terms_of_use_title: "Nutzungsbedingungen",
        terms_of_use_text: "Durch die Nutzung der mrCetin Studios Website stimmen Sie den folgenden Nutzungsbedingungen zu. Diese Bedingungen enthalten Bestimmungen bezüglich der Nutzung unserer Website, ihrer Inhalte, geistiger Eigentumsrechte und Haftungsbeschränkungen. Die Inhalte unserer Website dienen ausschließlich allgemeinen Informationszwecken und stellen keine Rechtsberatung dar. Es wird erwartet, dass Sie unsere Dienste nicht missbrauchen, keine illegalen Aktivitäten durchführen und die Rechte anderer Nutzer respektieren. Bei Verstoß gegen diese Bedingungen kann Ihr Zugang zu unseren Diensten eingeschränkt oder beendet werden. Bitte lesen Sie diese Bedingungen sorgfältig durch.",
        legal_notice_title: "Rechtlicher Hinweis",
        legal_notice_text: "Dieser rechtliche Hinweis enthält die rechtlichen Informationen, Unternehmensdetails und Urheberrechtserklärungen von mrCetin Studios. Alle Inhalte, Texte, Grafiken, Logos und Software auf unserer Website gehören mrCetin Studios oder sind lizenziert und durch Urheberrechtsgesetze geschützt. Unerlaubte Vervielfältigung, Verbreitung oder Nutzung ist untersagt. Die auf unserer Website enthaltenen Informationen werden nach bestem Wissen und Gewissen bereitgestellt, es wird jedoch keine Garantie für deren Richtigkeit oder Vollständigkeit übernommen. Bei rechtlichen Fragen oder Bedenken wenden Sie sich bitte an einen qualifizierten Rechtsberater.",
        sitemap_title: "Sitemap",
        sitemap_text: "Sitemap für schnellen Zugriff auf alle Seiten der mrCetin Studios Website. Enthält die Hauptbereiche wie Startseite, Unsere Anwendungen, Wer wir sind, Vision, Mission, Kontakt, Datenschutzrichtlinie, Verwendung von Cookies, Nutzungsbedingungen, Rechtlicher Hinweis. Diese Karte wurde erstellt, um Ihnen die Navigation auf unserer Website zu erleichtern und Ihnen einen schnelleren Zugriff auf die gesuchten Informationen zu ermöglichen. Sollte ein Seitenlink nicht funktionieren, kontaktieren Sie uns bitte."
    },
    es: {
        page_title: "mrCetin Consultoría y Soluciones Digitales",
        nav_applications: "Nuestras Soluciones",
        nav_about_us: "Quiénes Somos",
        nav_vision: "Visión",
        nav_mission: "Misión",
        nav_contact: "Contacto",
        hero_title: "Consultoría y soluciones digitales.",
        hero_subtitle: "Analizamos sus necesidades, creamos soluciones y las llevamos al mundo digital.",
        hero_button: "Descubra Nuestras Soluciones",
        applications_title: "Nuestras Soluciones",
        applications_text: "Nuestros ejemplos de soluciones",
        game_project_1_title: "Proyecto de Juego 1",
        game_project_1_description: "Un juego emocionante, nostálgico y altamente competitivo. Actualmente en desarrollo.",
        game_project_2_title: "Soluciones de Gestión de Inventario y Costos",
        game_project_2_description: "Soluciones desarrolladas para ingeniería de menús, gestión de inventario y optimización de costos. En desarrollo.",
        mobile_app_project_title: "Proyecto de Aplicación Móvil",
        mobile_app_project_description: "Una aplicación que enriquecerá su experiencia de viaje y hará su ruta más completa. Próximamente disponible.",
        status_in_development: "En Desarrollo",
        status_coming_soon: "Próximamente Disponible",
        about_us_title: "Quiénes Somos",
        about_us_text_p1: "Somos un estudio de consultoría y comunicación tecnológica que opera con principios de alta precisión técnica, seguridad y sostenibilidad en los procesos de consultoría, gestión de sistemas organizacionales, desarrollo de aplicaciones digitales y productos digitales.",
        about_us_text_p2: "Adoptamos un enfoque que simplifica infraestructuras complejas, optimiza procesos con automatización y presenta cada paso de forma documentada.",
        about_us_text_p3: "Desarrollamos soluciones orientadas tanto a la ingeniería como a la estrategia en componentes críticos como consultoría, arquitectura de aplicaciones, seguridad de datos, experiencia de usuario e infraestructura de comunicación.",
        about_us_text_p4: "Cada proyecto se diseña para ser no solo funcional, sino también integrado con la identidad corporativa, adecuado para el éxito a largo plazo y técnicamente sostenible.",
        about_us_text_p5: "Para que las marcas puedan dejar una fuerte huella en el mundo digital; estructuramos profesionalmente sus infraestructuras técnicas y damos forma estratégica a sus lenguajes de comunicación.",
        about_us_text_p6: "Porque no somos solo los desarrolladores de nuestras soluciones; somos un socio de soluciones que las lleva al futuro, las guía y genera valor.",
        vision_title: "Visión",
        vision_text: "Ser un punto de referencia que deje huella en el mundo digital, construyendo las infraestructuras técnicas de las instituciones de forma sencilla, segura y escalable, con el principio de excelencia en consultoría, seguridad de la información, sostenibilidad de sistemas y comunicación digital. Con sistemas configurados con alta precisión y soluciones de comunicación estratégica; nuestro objetivo es crear un ecosistema que dirija, guíe y produzca valor en la tecnología.",
        mission_title: "Misión",
        mission_text: "Simplificando procesos tecnológicos complejos; ofrecer soluciones integrales en seguridad de correo electrónico, integración de certificados en cadena, automatización y comunicación de marca. Actuando con los principios de precisión técnica, sostenibilidad y orientación al usuario en cada proyecto; aseguramos que las instituciones posicionen sus activos digitales de forma segura, profesional y eficaz.",
        contact_title: "Contacto",
        contact_text: "Póngase en contacto con nosotros para identificar sus necesidades y discutir nuestras soluciones.",
        contact_address: "Çekmeköy, Estambul, Turquía",
        contact_phone: "Teléfono: +9 0531 932 33 96",
        contact_email: "Correo electrónico: info@mrcetin.com",
        footer_privacy: "Política de Privacidad",
        footer_cookies: "Uso de Cookies",
        footer_terms: "Términos de Uso",
        footer_legal: "Legal",
        footer_sitemap: "Mapa del Sitio",
        footer_copyright: "© 2025 mrCetin Studios. Todos los derechos reservados.",
        privacy_policy_title: "Política de Privacidad",
        privacy_policy_text: "Esta política de privacidad explica cómo mrCetin Tech recopila, utiliza, divulga y protege su información personal. Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política. Su seguridad de datos es importante para nosotros y tomamos todas las precauciones necesarias para proteger sus datos. Los datos que recopilamos se utilizan para mejorar nuestros servicios, brindarle una mejor experiencia y cumplir con nuestras obligaciones legales. No compartiremos sus datos con terceros sin su consentimiento, pero los requisitos legales o la colaboración con nuestros proveedores de servicios pueden ser una excepción. Para obtener más información sobre sus derechos de privacidad, contáctenos.",
        cookie_policy_title: "Uso de Cookies",
        cookie_policy_text: "Nuestro sitio web utiliza cookies para mejorar su experiencia de usuario y analizar nuestros servicios. Las cookies son pequeños archivos de texto almacenados en su computadora por su navegador. Estas cookies nos ayudan a recordar sus preferencias, analizar el tráfico del sitio y ofrecerle contenido personalizado. Puede controlar y eliminar las cookies en cualquier momento desde la configuración de su navegador. Sin embargo, tenga en cuenta que si desactiva las cookies, algunas funciones de nuestro sitio web pueden no funcionar correctamente. Para obtener más información, puede consultar nuestra política de cookies.",
        terms_of_use_title: "Términos de Uso",
        terms_of_use_text: "Al utilizar el sitio web de mrCetin Tech, usted acepta los siguientes términos de uso. Estos términos incluyen disposiciones sobre el uso de nuestro sitio web, su contenido, los derechos de propiedad intelectual y las limitaciones de responsabilidad. El contenido de nuestro sitio web es solo para fines de información general y no constituye asesoramiento legal. Se espera que no haga un mal uso de nuestros servicios, no participe en actividades ilegales y respete los derechos de otros usuarios. Si incumple estos términos, su acceso a nuestros servicios puede ser restringido o terminado. Lea estos términos detenidamente.",
        legal_notice_title: "Aviso Legal",
        legal_notice_text: "Este aviso legal contiene la información legal, los detalles de la empresa y las declaraciones de derechos de autor de mrCetin Tech. Todo el contenido de nuestro sitio web, incluidos textos, gráficos, logotipos y software, es propiedad de mrCetin Tech o está bajo licencia y está protegido por las leyes de derechos de autor. Se prohíbe la reproducción, distribución o uso no autorizado. La información proporcionada en nuestro sitio web se presenta de buena fe, pero no se garantiza su exactitud o integridad. Si tiene alguna pregunta o inquietud legal, consulte a un asesor legal calificado.",
        sitemap_title: "Mapa del Sitio",
        sitemap_text: "Mapa del sitio para un acceso rápido a todas las páginas del sitio web de mrCetin Tech. Incluye secciones principales como Inicio, Nuestras Aplicaciones, Quiénes Somos, Visión, Misión, Contacto, Política de Privacidad, Uso de Cookies, Términos de Uso, Aviso Legal. Este mapa ha sido preparado para facilitar su navegación por nuestro sitio web y ayudarle a encontrar la información que busca más rápidamente. Si algún enlace de página no funciona, contáctenos."
    },
    ru: {
        page_title: "mrCetin Консалтинг и Цифровые решения",
        nav_applications: "Наши решения",
        nav_about_us: "Кто мы",
        nav_vision: "Видение",
        nav_mission: "Миссия",
        nav_contact: "Контакты",
        hero_title: "Консалтинг и цифровые решения.",
        hero_subtitle: "Анализируем ваши потребности, разрабатываем решения и переносим эти решения в цифровой мир.",
        hero_button: "Откройте для себя наши решения",
        applications_title: "Наши решения",
        applications_text: "Примеры наших решений",
        game_project_1_title: "Игровой проект 1",
        game_project_1_description: "Захватывающая, ностальгическая и высококонкурентная игра. В настоящее время находится в разработке.",
        game_project_2_title: "Решения для управления запасами и затратами",
        game_project_2_description: "Решения, разработанные для меню-инжиниринга, управления запасами и оптимизации затрат. Находится в разработке.",
        mobile_app_project_title: "Проект мобильного приложения",
        mobile_app_project_description: "Приложение, которое обогатит ваш опыт путешествий и сделает ваш маршрут более полным. Скоро будет доступно.",
        status_in_development: "В разработке",
        status_coming_soon: "Скоро будет доступно",
        about_us_title: "Кто мы",
        about_us_text_p1: "Мы — студия консалтинга и технологических коммуникаций, действующая с принципами высокой технической точности, безопасности и устойчивости в процессах консалтинга, управления и организационного системного менеджмента, разработки цифровых приложений и цифровых продуктов.",
        about_us_text_p2: "Мы применяем подход, который упрощает сложные инфраструктуры, оптимизирует процессы с помощью автоматизации и представляет каждый шаг в документированном виде.",
        about_us_text_p3: "Мы разрабатываем как инженерные, так и стратегически ориентированные решения в таких критически важных компонентах, как консалтинг, архитектура приложений, безопасность данных, пользовательский опыт и коммуникационная инфраструктура.",
        about_us_text_p4: "Каждый проект разрабатывается не только функциональным, но и интегрированным в корпоративную идентичность, подходящим для долгосрочного успеха и технически устойчивым.",
        about_us_text_p5: "Чтобы бренды могли оставить сильный след в цифровом мире, мы профессионально структурируем их технические инфраструктуры и стратегически формируем их языки общения.",
        about_us_text_p6: "Потому что мы не только разработчики наших решений; мы — партнеры по решениям, которые несут их в будущее, направляют и создают ценность.",
        vision_title: "Видение",
        vision_text: "С принципом превосходства в консалтинге, информационной безопасности, устойчивости систем и цифровых коммуникациях; стать точкой отсчета, оставляющей след в цифровом мире, путем создания простых, безопасных и масштабируемых технических инфраструктур для учреждений. С помощью высокоточных структурированных систем и стратегических коммуникационных решений; мы стремимся создать экосистему, которая направляет технологии, обеспечивает руководство и создает ценность.",
        mission_title: "Миссия",
        mission_text: "Упрощая сложные технологические процессы; предлагать целостные решения в области безопасности электронной почты, интеграции цепочек сертификатов, автоматизации и коммуникации бренда. В каждом проекте, действуя с принципами технической точности, устойчивости и ориентированности на пользователя; мы обеспечиваем, чтобы учреждения позиционировали свои цифровые активы безопасно, профессионально и эффективно.",
        contact_title: "Контакты",
        contact_text: "Свяжитесь с нами, чтобы определить ваши потребности и обсудить наши решения.",
        contact_address: "Чекмекёй, Стамбул, Турция",
        contact_phone: "Телефон: +9 0531 932 33 96",
        contact_email: "Электронная почта: info@mrcetin.com",
        footer_privacy: "Политика конфиденциальности",
        footer_cookies: "Использование файлов cookie",
        footer_terms: "Условия использования",
        footer_legal: "Юридическая информация",
        footer_sitemap: "Карта сайта",
        footer_copyright: "© 2025 mrCetin Tech. Все права защищены.",
        privacy_policy_title: "Политика конфиденциальности",
        privacy_policy_text: "Эта политика конфиденциальности объясняет, как mrCetin Tech собирает, использует, раскрывает и защищает ваши личные данные. Используя наши услуги, вы соглашаетесь с практиками, описанными в этой политике. Безопасность ваших данных важна для нас, и мы принимаем все необходимые меры для их защиты. Собираемые нами данные используются для улучшения наших услуг, предоставления вам лучшего опыта и выполнения наших юридических обязательств. Мы не передаем ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом, или сотрудничества с нашими поставщиками услуг. Для получения дополнительной информации о ваших правах на конфиденциальность, пожалуйста, свяжитесь с нами.",
        cookie_policy_title: "Использование файлов cookie",
        cookie_policy_text: "Наш веб-сайт использует файлы cookie для улучшения вашего пользовательского опыта и анализа наших услуг. Файлы cookie — это небольшие текстовые файлы, хранящиеся на вашем компьютере вашим браузером. Эти файлы cookie помогают нам запоминать ваши предпочтения, анализировать трафик сайта и предлагать вам персонализированный контент. Вы можете контролировать и удалять файлы cookie в любое время через настройки вашего браузера. Однако, пожалуйста, имейте в виду, что если вы отключите файлы cookie, некоторые функции нашего веб-сайта могут работать некорректно. Для получения дополнительной информации вы можете ознакомиться с нашей политикой использования файлов cookie.",
        terms_of_use_title: "Условия использования",
        terms_of_use_text: "Используя веб-сайт mrCetin Tech, вы соглашаетесь со следующими условиями использования. Эти условия содержат положения, касающиеся использования нашего веб-сайта, его содержимого, прав интеллектуальной собственности и ограничений ответственности. Содержимое нашего веб-сайта предназначено только для общих информационных целей и не является юридической консультацией. Ожидается, что вы не будете злоупотреблять нашими услугами, участвовать в незаконной деятельности и уважать права других пользователей. В случае нарушения этих условий ваш доступ к нашим услугам может быть ограничен или прекращен. Пожалуйста, внимательно прочитайте эти условия.",
        legal_notice_title: "Юридическое уведомление",
        legal_notice_text: "Это юридическое уведомление содержит юридическую информацию mrCetin Tech, данные о компании и заявления об авторских правах. Все содержимое нашего веб-сайта, тексты, графика, логотипы и программное обеспечение принадлежат mrCetin Tech или лицензированы ею и защищены законами об авторском праве. Несанкционированное воспроизведение, распространение или использование запрещено. Информация, представленная на нашем веб-сайте, предоставлена добросовестно, но не гарантируется ее точность или полнота. Если у вас есть какие-либо юридические вопросы или опасения, пожалуйста, обратитесь к квалифицированному юристу.",
        sitemap_title: "Карта сайта",
        sitemap_text: "Карта сайта для быстрого доступа ко всем страницам веб-сайта mrCetin Tech. Включает основные разделы, такие как Главная страница, Наши приложения, Кто мы, Видение, Миссия, Контакты, Политика конфиденциальности, Использование файлов cookie, Условия использования, Юридическое уведомление. Эта карта предназначена для облегчения навигации по нашему веб-сайту и обеспечения более быстрого доступа к нужной информации. В случае, если какая-либо ссылка на страницу не работает, пожалуйста, свяжитесь с нами."
    },
    ja: {
        page_title: "mrCetin コンサルティングとデジタルソリューション",
        nav_applications: "私たちのソリューション",
        nav_about_us: "私たちについて",
        nav_vision: "ビジョン",
        nav_mission: "ミッション",
        nav_contact: "お問い合わせ",
        hero_title: "コンサルティングとデジタルソリューション",
        hero_subtitle: "お客様のニーズを分析し、ソリューションを開発し、それらのソリューションをデジタル世界に提供します。",
        hero_button: "私たちのソリューションを発見する",
        applications_title: "私たちのソリューション",
        applications_text: "ソリューション事例",
        game_project_1_title: "ゲームプロジェクト1",
        game_project_1_description: "刺激的で、懐かしく、高い競争力を持つゲームです。現在開発中です。",
        game_project_2_title: "在庫と原価管理ソリューション",
        game_project_2_description: "メニューエンジニアリング、在庫管理、コスト最適化のために開発されたソリューション。開発中。",
        mobile_app_project_title: "モバイルアプリプロジェクト",
        mobile_app_project_description: "旅行体験を豊かにし、旅のルートをより充実させるアプリ。近日公開予定です。",
        status_in_development: "開発中",
        status_coming_soon: "近日公開",
        about_us_title: "私たちについて",
        about_us_text_p1: "私たちは、コンサルティング、経営および組織システム管理、デジタルアプリケーションおよびデジタル製品開発プロセスにおいて、高い技術的正確性、セキュリティ、および持続可能性の原則に基づいて活動するコンサルティングおよびテクノロジーコミュニケーションスタジオです。",
        about_us_text_p2: "複雑なインフラを簡素化し、プロセスを自動化で最適化し、全てのステップを文書化された形で提供するアプローチを採用しています。",
        about_us_text_p3: "コンサルティング、アプリケーションアーキテクチャ、データセキュリティ、ユーザーエクスペリエンス、コミュニケーションインフラストラクチャなどの重要なコンポーネントにおいて、エンジニアリングと戦略の両方に焦点を当てたソリューションを開発しています。",
        about_us_text_p4: "すべてのプロジェクトは、機能的であるだけでなく、企業アイデンティティに統合され、長期的な成功に適し、技術的に持続可能であるように設計されています。",
        about_us_text_p5: "ブランドがデジタル世界で強い存在感を示すために、私たちは技術インフラを専門的に構築し、コミュニケーション言語を戦略的に形成しています。",
        about_us_text_p6: "私たちは、単にソリューションの開発者であるだけでなく、それらを未来へと導き、価値を創造するソリューションパートナーです。",
        vision_title: "ビジョン",
        vision_text: "コンサルティング、情報セキュリティ、システム持続可能性、デジタルコミュニケーションにおける卓越性の原則に基づき、組織の技術インフラをシンプル、安全、スケーラブルな方法で構築し、デジタル世界で足跡を残す基準点となることを目指します。高精度に構築されたシステムと戦略的なコミュニケーションソリューションを通じて、テクノロジーを推進し、導き、価値を生み出すエコシステムを創造することを目指しています。",
        mission_title: "ミッション",
        mission_text: "複雑な技術プロセスを簡素化し、電子メールセキュリティ、チェーン証明書統合、自動化、ブランドコミュニケーションの分野で包括的なソリューションを提供します。各プロジェクトにおいて、技術的な正確性、持続可能性、ユーザー中心主義の原則に基づいて行動することで、組織がデジタル資産を安全、プロフェッショナル、かつ効果的に位置付けられるように支援します。",
        contact_title: "お問い合わせ",
        contact_text: "お客様のニーズを特定し、当社のソリューションについて話し合うためにお問い合わせください。",
        contact_address: "チェクメキョイ、イスタンブール、トルコ",
        contact_phone: "電話: +9 0531 932 33 96",
        contact_email: "Eメール: info@mrcetin.com",
        footer_privacy: "プライバシーポリシー",
        footer_cookies: "クッキーの使用",
        footer_terms: "利用規約",
        footer_legal: "法的",
        footer_sitemap: "サイトマップ",
        footer_copyright: "© 2025 mrCetin Tech. 全著作権所有。",
        privacy_policy_title: "プライバシーポリシー",
        privacy_policy_text: "このプライバシーポリシーは、mrCetin Techがお客様の個人データをどのように収集、使用、開示、保護するかを説明します。当社のサービスを利用することにより、お客様はこのポリシーに記載されている慣行に同意したものとみなされます。お客様のデータセキュリティは当社にとって重要であり、当社はお客様のデータを保護するために必要なすべての措置を講じています。当社が収集するデータは、サービスの改善、より良い体験の提供、および法的義務の履行のために使用されます。当社は、お客様の同意なしに第三者とデータを共有することはありませんが、法的要件またはサービスプロバイダーとの協力の場合は例外となることがあります。プライバシー権に関する詳細については、当社までお問い合わせください。",
        cookie_policy_title: "クッキーの使用",
        cookie_policy_text: "当社のウェブサイトは、ユーザーエクスペリエンスを向上させ、サービスを分析するためにクッキーを使用しています。クッキーは、お客様のブラウザによってコンピュータに保存される小さなテキストファイルです。これらのクッキーは、お客様の好みを記憶し、サイトのトラフィックを分析し、パーソナライズされたコンテンツを提供するために役立ちます。お客様はいつでもブラウザの設定からクッキーを制御および削除できます。ただし、クッキーを無効にした場合、ウェブサイトの一部の機能が正しく動作しない可能性があることにご注意ください。詳細については、当社のクッキーポリシーをご確認ください。",
        terms_of_use_title: "利用規約",
        terms_of_use_text: "mrCetin Techのウェブサイトを利用することにより、お客様は以下の利用規約に同意したものとみなされます。これらの規約には、ウェブサイトの利用、コンテンツ、知的財産権、および責任の制限に関する規定が含まれています。当社のウェブサイトのコンテンツは一般的な情報提供のみを目的としており、法的助言を構成するものではありません。お客様は、当社のサービスを悪用したり、違法行為を行ったり、他のユーザーの権利を尊重したりすることが求められます。これらの規約に違反した場合、当社のサービスへのアクセスが制限または終了されることがあります。これらの規約を注意深くお読みください。",
        legal_notice_title: "法的通知",
        legal_notice_text: "この法的通知には、mrCetin Techの法的情報、会社詳細、および著作権表示が含まれています。当社のウェブサイト上のすべてのコンテンツ、テキスト、グラフィック、ロゴ、およびソフトウェアはmrCetin Techが所有またはライセンス供与しており、著作権法によって保護されています。無断での複製、配布、または使用は禁止されています。当社のウェブサイトに掲載されている情報は誠意を持って提供されていますが、その正確性または完全性について保証するものではありません。法的な質問や懸念がある場合は、資格のある法律顧問にご相談ください。",
        sitemap_title: "サイトマップ",
        sitemap_text: "mrCetin Techウェブサイトのすべてのページに素早くアクセスするためのサイトマップです。ホームページ、アプリケーション、会社概要、ビジョン、ミッション、お問い合わせ、プライバシーポリシー、クッキーの使用、利用規約、法的通知などの主要セクションが含まれています。このマップは、ウェブサイト内でのナビゲーションを容易にし、探している情報に素早くアクセスできるように作成されています。いずれかのページリンクが機能しない場合は、当社までご連絡ください。"
    },
    zh: {
        page_title: "mrCetin 咨询与数字解决方案",
        nav_applications: "我们的解决方案",
        nav_about_us: "我们是谁",
        nav_vision: "愿景",
        nav_mission: "使命",
        nav_contact: "联系",
        hero_title: "咨询与数字解决方案",
        hero_subtitle: "我们分析您的需求，提供解决方案，并将这些解决方案带入数字世界。",
        hero_button: "探索我们的解决方案",
        applications_title: "我们的解决方案",
        applications_text: "解决方案示例",
        game_project_1_title: "游戏项目 1",
        game_project_1_description: "一个令人兴奋、怀旧且竞争激烈的游戏。目前正在开发中。",
        game_project_2_title: "库存和成本管理解决方案",
        game_project_2_description: "为菜单工程、库存管理和成本优化开发的解决方案。正在开发中。",
        mobile_app_project_title: "移动应用项目",
        mobile_app_project_description: "一个将丰富您的旅行体验并使您的路线更完整的应用程序。即将推出。",
        status_in_development: "开发中",
        status_coming_soon: "即将推出",
        about_us_title: "我们是谁",
        about_us_text_p1: "我们是一家咨询和技术传播工作室，在咨询、管理和组织系统管理、数字应用和数字产品开发过程中，秉承高技术准确性、安全性和可持续性原则。",
        about_us_text_p2: "我们采用一种方法，简化复杂的架构，通过自动化优化流程，并以文档化的方式呈现每一步。",
        about_us_text_p3: "在咨询、应用程序架构、数据安全、用户体验和通信基础设施等关键组件中，我们开发了以工程和战略为导向的解决方案。",
        about_us_text_p4: "每个项目的设计不仅要具有功能性，还要与企业形象融为一体，适合长期成功，并在技术上可持续。",
        about_us_text_p5: "为了让品牌在数字世界中留下深刻印记，我们专业地构建其技术基础设施，并战略性地塑造其沟通语言。",
        about_us_text_p6: "因为我们不仅是解决方案的开发者，更是将其带向未来、提供指导并创造价值的解决方案合作伙伴。",
        vision_title: "愿景",
        vision_text: "以咨询、信息安全、系统可持续性和数字通信的卓越原则；通过以简单、安全和可扩展的方式构建机构的技术基础设施，成为数字世界中留下印记的参考点。我们旨在通过高精度构建的系统和战略性通信解决方案，创建一个引领技术、提供指导并创造价值的生态系统。",
        mission_title: "使命",
        mission_text: "通过简化复杂的技术流程；在电子邮件安全、链式证书集成、自动化和品牌传播领域提供整体解决方案。在每个项目中，我们都遵循技术准确性、可持续性和以用户为中心的原则；确保机构的数字资产安全、专业和有效地定位。",
        contact_title: "联系",
        contact_text: "请联系我们，确定您的需求并讨论我们的解决方案。",
        contact_address: "切克梅科伊, 伊斯坦布尔, 土耳其",
        contact_phone: "电话: +9 0531 932 33 96",
        contact_email: "电子邮件: info@mrcetin.com",
        footer_privacy: "隐私政策",
        footer_cookies: "Cookie 使用",
        footer_terms: "使用条款",
        footer_legal: "法律",
        footer_sitemap: "网站地图",
        footer_copyright: "© 2025 mrCetin Tech. 保留所有权利。",
        privacy_policy_title: "隐私政策",
        privacy_policy_text: "本隐私政策解释了 mrCetin Tech 如何收集、使用、披露和保护您的个人数据。使用我们的服务即表示您同意本政策中描述的做法。您的数据安全对我们很重要，我们采取一切必要措施保护您的数据。我们收集的数据用于改进我们的服务，为您提供更好的体验，并履行我们的法律义务。未经您的同意，我们不会与第三方共享您的数据，但法律要求或与我们的服务提供商合作的情况除外。有关您的隐私权的更多信息，请联系我们。",
        cookie_policy_title: "Cookie 使用",
        cookie_policy_text: "我们的网站使用 Cookie 来改善您的用户体验并分析我们的服务。Cookie 是由您的浏览器存储在您计算机上的小型文本文件。这些 Cookie 帮助我们记住您的偏好、分析网站流量并为您提供个性化内容。您可以随时通过浏览器设置控制和删除 Cookie。但是，请注意，如果您禁用 Cookie，我们网站的某些功能可能无法正常运行。有关更多信息，您可以查阅我们的 Cookie 政策。",
        terms_of_use_title: "使用条款",
        terms_of_use_text: "使用 mrCetin Tech 网站即表示您同意以下使用条款。这些条款包含有关我们网站的使用、内容、知识产权和责任限制的规定。我们网站上的内容仅供一般信息参考，不构成任何法律建议。您应避免滥用我们的服务、从事非法活动并尊重其他用户的权利。如果您违反这些条款，您对我们服务的访问可能会受到限制或终止。请仔细阅读这些条款。",
        legal_notice_title: "法律声明",
        legal_notice_text: "本法律声明包含 mrCetin Tech 的法律信息、公司详情和版权声明。我们网站上的所有内容、文本、图形、徽标和软件均归 mrCetin Tech 所有或已获得许可，并受版权法保护。未经授权的复制、分发或使用是被禁止的。我们网站上提供的信息是出于善意，但对其准确性或完整性不作保证。如果您有任何法律问题或疑虑，请咨询合格的法律顾问。",
        sitemap_title: "网站地图",
        sitemap_text: "mrCetin Tech 网站所有页面的快速访问站点地图。包括主页、我们的应用程序、关于我们、愿景、使命、联系方式、隐私政策、Cookie 使用、使用条款、法律声明等主要部分。此地图旨在方便您浏览我们的网站，并更快地找到您所需的信息。如果任何页面链接无法正常工作，请联系我们。"
    },
    ko: {
        page_title: "mrCetin 컨설팅 및 디지털 솔루션",
        nav_applications: "우리의 솔루션",
        nav_about_us: "우리는 누구인가",
        nav_vision: "비전",
        nav_mission: "미션",
        nav_contact: "연락처",
        hero_title: "컨설팅 및 디지털 솔루션.",
        hero_subtitle: "귀하의 요구 사항을 분석하고, 솔루션을 생성하며, 이러한 솔루션을 디지털 세계로 가져옵니다.",
        hero_button: "우리의 솔루션을 찾아보세요.",
        applications_title: "우리의 솔루션",
        applications_text: "솔루션 예시",
        game_project_1_title: "게임 프로젝트 1",
        game_project_1_description: "흥미진진하고 향수를 불러일으키며 경쟁이 치열한 게임입니다. 현재 개발 중입니다.",
        game_project_2_title: "재고 및 비용 관리 솔루션",
        game_project_2_description: "메뉴 엔지니어링, 재고 관리 및 비용 최적화를 위해 개발된 솔루션입니다. 개발 중입니다.",
        mobile_app_project_title: "모바일 앱 프로젝트",
        mobile_app_project_description: "여행 경험을 풍부하게 하고 경로를 더욱 완벽하게 만들어 줄 앱입니다. 곧 출시될 예정입니다.",
        status_in_development: "개발 중",
        status_coming_soon: "곧 출시될 예정입니다",
        about_us_title: "우리는 누구인가",
        about_us_text_p1: "컨설팅, 관리 및 조직 시스템 관리, 디지털 애플리케이션 및 디지털 제품 개발 프로세스에서 높은 기술 정확성, 보안 및 지속 가능성 원칙에 따라 운영되는 컨설팅 및 기술 커뮤니케이션 스튜디오입니다.",
        about_us_text_p2: "복잡한 인프라를 단순화하고, 자동화를 통해 프로세스를 최적화하며, 모든 단계를 문서화된 방식으로 제공하는 접근 방식을 채택합니다.",
        about_us_text_p3: "컨설팅, 애플리케이션 아키텍처, 데이터 보안, 사용자 경험 및 통신 인프라와 같은 중요한 구성 요소에서 엔지니어링 및 전략 중심 솔루션을 개발합니다.",
        about_us_text_p4: "각 프로젝트는 기능적일 뿐만 아니라 기업 아이덴티티에 통합되고 장기적인 성공에 적합하며 기술적으로 지속 가능하도록 설계됩니다.",
        about_us_text_p5: "브랜드가 디지털 세계에서 강력한 흔적을 남길 수 있도록 기술 인프라를 전문적으로 구성하고 커뮤니케이션 언어를 전략적으로 형성합니다.",
        about_us_text_p6: "우리는 솔루션의 개발자일 뿐만 아니라 솔루션을 미래로 이끌고 안내하며 가치를 창출하는 솔루션 파트너이기 때문입니다.",
        vision_title: "비전",
        vision_text: "컨설팅, 정보 보안, 시스템 지속 가능성 및 디지털 커뮤니케이션의 우수성 원칙을 바탕으로 기관의 기술 인프라를 단순하고 안전하며 확장 가능한 방식으로 구축하여 디지털 세계에서 흔적을 남기는 기준점이 되는 것입니다. 높은 정확도로 구성된 시스템과 전략적 커뮤니케이션 솔루션을 통해 기술을 주도하고 안내하며 가치를 창출하는 생태계를 조성하는 것을 목표로 합니다.",
        mission_title: "미션",
        mission_text: "복잡한 기술 프로세스를 단순화하여 이메일 보안, 체인 인증서 통합, 자동화 및 브랜드 커뮤니케이션 분야에서 전체적인 솔루션을 제공합니다. 각 프로젝트에서 기술적 정확성, 지속 가능성 및 사용자 중심 원칙에 따라 행동함으로써 기관이 디지털 자산을 안전하고 전문적이며 효과적인 방식으로 포지셔닝할 수 있도록 지원합니다.",
        contact_title: "연락처",
        contact_text: "귀하의 필요 사항을 파악하고 솔루션에 대해 논의하려면 당사에 문의하십시오.",
        contact_address: "체크메쾨이, 이스탄불, 터키",
        contact_phone: "전화: +9 0531 932 33 96",
        contact_email: "이메일: info@mrcetin.com",
        footer_privacy: "개인정보처리방침",
        footer_cookies: "쿠키 사용",
        footer_terms: "이용약관",
        footer_legal: "법률",
        footer_sitemap: "사이트맵",
        footer_copyright: "© 2025 mrCetin Tech. 모든 권리 보유.",
        privacy_policy_title: "개인정보처리방침",
        privacy_policy_text: "이 개인정보 처리방침은 mrCetin Tech가 귀하의 개인 데이터를 수집, 사용, 공개 및 보호하는 방법을 설명합니다. 당사 서비스를 이용함으로써 귀하는 본 정책에 설명된 관행에 동의하는 것입니다. 데이터 보안은 당사에 중요하며, 당사는 귀하의 데이터를 보호하기 위해 필요한 모든 조치를 취합니다. 당사가 수집하는 데이터는 서비스 개선, 더 나은 경험 제공 및 법적 의무 이행을 위해 사용됩니다. 당사는 귀하의 동의 없이 제3자와 귀하의 데이터를 공유하지 않지만, 법적 요구 사항 또는 서비스 제공업체와의 협력은 예외가 될 수 있습니다. 개인정보 보호 권리에 대한 자세한 내용은 당사에 문의하십시오.",
        cookie_policy_title: "쿠키 사용",
        cookie_policy_text: "당사 웹사이트는 사용자 경험을 개선하고 서비스를 분석하기 위해 쿠키를 사용합니다. 쿠키는 브라우저에 의해 컴퓨터에 저장되는 작은 텍스트 파일입니다. 이 쿠키는 귀하의 선호도를 기억하고, 사이트 트래픽을 분석하며, 개인화된 콘텐츠를 제공하는 데 도움이 됩니다. 귀하는 언제든지 브라우저 설정에서 쿠키를 제어하고 삭제할 수 있습니다. 그러나 쿠키를 비활성화하면 웹사이트의 일부 기능이 제대로 작동하지 않을 수 있습니다. 자세한 내용은 쿠키 정책을 참조하십시오.",
        terms_of_use_title: "이용약관",
        terms_of_use_text: "mrCetin Tech 웹사이트를 이용함으로써 귀하는 다음 이용 약관에 동의하는 것입니다. 이 약관은 웹사이트의 사용, 콘텐츠, 지적 재산권 및 책임 제한에 관한 조항을 포함합니다. 당사 웹사이트의 콘텐츠는 일반 정보 제공만을 목적으로 하며 법적 조언을 구성하지 않습니다. 귀하는 당사 서비스를 남용하거나 불법 활동에 참여하거나 다른 사용자의 권리를 존중하지 않아야 합니다. 이 약관을 위반할 경우, 당사 서비스에 대한 귀하의 접근이 제한되거나 종료될 수 있습니다. 이 약관을 주의 깊게 읽으십시오.",
        legal_notice_title: "법적 고지",
        legal_notice_text: "이 법적 고지에는 mrCetin Tech의 법적 정보, 회사 세부 정보 및 저작권 진술이 포함되어 있습니다. 당사 웹사이트의 모든 콘텐츠, 텍스트, 그래픽, 로고 및 소프트웨어는 mrCetin Tech의 소유이거나 라이선스가 부여되었으며 저작권법의 보호를 받습니다. 무단 복제, 배포 또는 사용은 금지됩니다. 당사 웹사이트에 제공된 정보는 선의로 제공되었지만, 정확성이나 완전성에 대한 보증은 제공되지 않습니다. 법적 질문이나 우려 사항이 있는 경우, 유능한 법률 고문에게 문의하십시오.",
        sitemap_title: "사이트맵",
        sitemap_text: "mrCetin Tech 웹사이트의 모든 페이지에 빠르게 접근할 수 있는 사이트맵입니다. 홈, 당사의 애플리케이션, 당사는 누구인가, 비전, 미션, 연락처, 개인정보 처리방침, 쿠키 사용, 이용 약관, 법적 고지와 같은 주요 섹션을 포함합니다. 이 지도는 웹사이트 탐색을 용이하게 하고 원하는 정보에 더 빠르게 접근할 수 있도록 준비되었습니다. 페이지 링크가 작동하지 않는 경우 당사에 문의하십시오."
    },
    ar: {
        page_title: "mrCetin Tech - تصميم تطبيقات الجوال والألعاب",
        nav_applications: "تطبيقاتنا",
        nav_about_us: "من نحن",
        nav_vision: "الرؤية",
        nav_mission: "المهمة",
        nav_contact: "اتصل بنا",
        hero_title: "تجارب مبتكرة لتطبيقات الجوال والألعاب",
        hero_subtitle: "نحول أحلامك إلى العالم الرقمي.",
        hero_button: "استكشف مشاريعنا",
        applications_title: "تطبيقاتنا",
        applications_text: "هنا ستجد أمثلة على مشاريع تطبيقات الجوال والألعاب لدينا.",
        game_project_1_title: "مشروع اللعبة 1",
        game_project_1_description: "لعبة تدريب مهني مثيرة. قيد التطوير.",
        game_project_2_title: "مشروع اللعبة 2",
        game_project_2_description: "تجربة تحدي حنينية. قيد التطوير.",
        mobile_app_project_title: "مشروع تطبيق جوال",
        mobile_app_project_description: "تطبيق سيعزز تجربة سفرك ويكمل أوجه القصور في مسارك. قريبا.",        status_in_development: "قيد التطوير",
        status_coming_soon: "قريبا",
        about_us_title: "من نحن",
        about_us_text_p1: "نحن استوديو تكنولوجيا واتصالات يعمل بمبادئ الدقة التقنية العالية والأمان والاستدامة في عمليات تطوير تطبيقات الجوال والمنتجات الرقمية.",
        about_us_text_p2: "نعتمد نهجًا يبسط البنى التحتية المعقدة، ويحسن العمليات من خلال الأتمتة، ويقدم كل خطوة بطريقة موثقة.",
        about_us_text_p3: "في المكونات الحيوية مثل بنية التطبيق، وأمن البيانات، وتجربة المستخدم، والبنية التحتية للاتصالات؛ نطور حلولًا تركز على الهندسة والاستراتيجية على حد سواء.",
        about_us_text_p4: "تم تصميم كل مشروع ليكون ليس فقط وظيفيًا؛ بل أيضًا متكاملًا مع الهوية المؤسسية، ومناسبًا للنجاح على المدى الطويل، ومستدامًا تقنيًا.",
        about_us_text_p5: "لتمكين العلامات التجارية من ترك بصمة قوية في العالم الرقمي؛ نقوم ببناء بنيتها التحتية التقنية باحترافية، ونشكل لغاتها الاتصالية بشكل استراتيجي.",
        about_us_text_p6: "لأننا لسنا مجرد مطورين للمنتجات الرقمية؛ بل نحن شركاء حلول يحملونها إلى المستقبل، ويوجهونها، ويولدون القيمة.",
        vision_title: "الرؤية",
        vision_text: "مع مبدأ التميز في أمن المعلومات، واستدامة الأنظمة، والاتصالات الرقمية؛ بناء البنى التحتية التقنية للمؤسسات بطريقة بسيطة وآمنة وقابلة للتطوير لتكون نقطة مرجعية في العالم الرقمي. من خلال الأنظمة عالية التنظيم وحلول الاتصالات الاستراتيجية؛ نهدف إلى إنشاء نظام بيئي يقود التكنولوجيا، ويوفر التوجيه، ويولد القيمة.",
        mission_title: "المهمة",
        mission_text: "تبسيط العمليات التكنولوجية المعقدة من خلال تقديم حلول شاملة في أمن البريد الإلكتروني، وتكامل الشهادات المتسلسلة، والأتمتة، واتصالات العلامات التجارية. في كل مشروع، نعمل بمبادئ الدقة التقنية، والاستدامة، والتركيز على المستخدم؛ مما يضمن أن المؤسسات تضع أصولها الرقمية بشكل آمن ومهني وفعال.",
        contact_title: "اتصل بنا",
        contact_text: "تواصل معنا ودعنا نناقش مشروعك.",
        contact_address: "تشكمه كوي، اسطنبول، تركيا",
        contact_phone: "هاتف: +90531-932 33 96",
        contact_email: "بريد إلكتروني: info@mrcetin.com",
        footer_privacy: "سياسة الخصوصية",
        footer_cookies: "استخدام ملفات تعريف الارتباط",
        footer_terms: "شروط الاستخدام",
        footer_legal: "قانوني",
        footer_sitemap: "خريطة الموقع",
        footer_copyright: "© 2025 mrCetin Tech. جميع الحقوق محفوظة.",
        privacy_policy_title: "سياسة الخصوصية",
        privacy_policy_text: "توضح سياسة الخصوصية هذه كيفية قيام mrCetin Tech بجمع بياناتك الشخصية واستخدامها والكشف عنها وحمايتها. باستخدام خدماتنا، فإنك توافق على الممارسات الموضحة في هذه السياسة. أمان بياناتك مهم بالنسبة لنا، ونتخذ جميع الإجراءات اللازمة لحماية بياناتك. تُستخدم البيانات التي نجمعها لتحسين خدماتنا، وتزويدك بتجربة أفضل، والوفاء بالتزاماتنا القانونية. لا نشارك بياناتك مع أطراف ثالثة دون موافقتك، ولكن المتطلبات القانونية أو التعاون مع مزودي الخدمة لدينا قد يشكل استثناءً. لمزيد من المعلومات حول حقوق الخصوصية الخاصة بك، يرجى الاتصال بنا.",
        cookie_policy_title: "استخدام ملفات تعريف الارتباط",
        cookie_policy_text: "يستخدم موقعنا الإلكتروني ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل خدماتنا. ملفات تعريف الارتباط هي ملفات نصية صغيرة يخزنها متصفحك على جهاز الكمبيوتر الخاص بك. تساعدنا ملفات تعريف الارتباط هذه على تذكر تفضيلاتك، وتحليل حركة المرور على الموقع، وتزويدك بمحتوى مخصص. يمكنك التحكم في ملفات تعريف الارتباط وحذفها في أي وقت من خلال إعدادات المتصفح الخاص بك. ومع ذلك، يرجى ملاحظة أن بعض ميزات موقعنا الإلكتروني قد لا تعمل بشكل صحيح إذا قمت بتعطيل ملفات تعريف الارتباط. لمزيد من المعلومات، يرجى مراجعة سياسة ملفات تعريف الارتباط الخاصة بنا.",
        terms_of_use_title: "شروط الاستخدام",
        terms_of_use_text: "باستخدام موقع mrCetin Tech، فإنك توافق على شروط الاستخدام التالية. تتضمن هذه الشروط أحكامًا تتعلق باستخدام موقعنا الإلكتروني ومحتواه وحقوق الملكية الفكرية وحدود المسؤولية. المحتوى الموجود على موقعنا الإلكتروني هو لأغراض إعلامية عامة فقط ولا يشكل استشارة قانونية. يُتوقع منك عدم إساءة استخدام خدماتنا، وعدم الانخراط في أنشطة غير قانونية، واحترام حقوق المستخدمين الآخرين. في حالة انتهاك هذه الشروط، قد يتم تقييد وصولك إلى خدماتنا أو إنهاؤه. يرجى قراءة هذه الشروط بعناية.",
        legal_notice_title: "إشعار قانوني",
        legal_notice_text: "يحتوي هذا الإشعار القانوني على معلومات قانونية وتفاصيل الشركة وبيانات حقوق الطبع والنشر لـ mrCetin Tech. جميع المحتويات والنصوص والرسومات والشعارات والبرامج الموجودة على موقعنا الإلكتروني مملوكة لـ mrCetin Tech أو مرخصة لها ومحمية بموجب قوانين حقوق الطبع والنشر. يحظر الاستنساخ أو التوزيع أو الاستخدام غير المصرح به. يتم توفير المعلومات الموجودة على موقعنا الإلكتروني بحسن نية، ولكن لا يوجد ضمان لدقتها أو اكتمالها. إذا كانت لديك أي أسئلة أو مخاوف قانونية، يرجى استشارة مستشار قانوني مؤهل.",
        sitemap_title: "خريطة الموقع",
        sitemap_text: "خريطة الموقع للوصول السريع إلى جميع صفحات موقع mrCetin Tech. تتضمن الأقسام الرئيسية مثل الصفحة الرئيسية، تطبيقاتنا، من نحن، الرؤية، المهمة، اتصل بنا، سياسة الخصوصية، استخدام ملفات تعريف الارتباط، شروط الاستخدام، إشعار قانوني. تم تصميم هذه الخريطة لتسهيل التنقل في موقعنا الإلكتروني ومساعدتك في العثور على المعلومات التي تبحث عنها بسرعة أكبر. يرجى الاتصال بنا إذا كان أي رابط صفحة لا يعمل."
    },
    fr: {
        page_title: "mrCetin Tech - Conception d'applications mobiles et de jeux",
        nav_applications: "Nos applications",
        nav_about_us: "À propos de nous",
        nav_vision: "Vision",
        nav_mission: "Mission",
        nav_contact: "Contact",
        hero_title: "Expériences innovantes d'applications mobiles et de jeux",
        hero_subtitle: "Donner vie à vos rêves dans le monde numérique.",
        hero_button: "Découvrez nos projets",
        applications_title: "Nos applications",
        applications_text: "Vous trouverez ici des exemples de nos projets d'applications mobiles et de jeux.",
        game_project_1_title: "Projet de jeu 1",
        game_project_1_description: "Un jeu de formation professionnelle passionnant. En développement.",
        game_project_2_title: "Projet de jeu 2",
        game_project_2_description: "Une expérience de défi nostalgique. En développement.",
        mobile_app_project_title: "Projet d'application mobile",
        mobile_app_project_description: "Une application qui améliorera votre expérience de voyage et comblera les lacunes de votre itinéraire. Bientôt disponible.",
        status_in_development: "En développement",
        status_coming_soon: "Bientôt disponible",
        about_us_title: "Qui nous sommes",
        about_us_text_p1: "Nous sommes un studio de technologie et de communication qui fonctionne avec des principes de haute précision technique, de sécurité et de durabilité dans les processus de développement d'applications mobiles et de produits numériques.",
        about_us_text_p2: "Nous adoptons une approche qui simplifie les infrastructures complexes, optimise les processus avec l'automatisation et présente chaque étape de manière documentée.",
        about_us_text_p3: "Dans des composants critiques tels que l'architecture des applications, la sécurité des données, l'expérience utilisateur et l'infrastructure de communication ; nous développons des solutions axées à la fois sur l'ingénierie et la stratégie.",
        about_us_text_p4: "Chaque projet est conçu non seulement pour être fonctionnel, mais aussi pour être intégré à l'identité de l'entreprise, adapté au succès à long terme et techniquement durable.",
        about_us_text_p5: "Pour permettre aux marques de laisser une forte empreinte dans le monde numérique ; nous structurons professionnellement leurs infrastructures techniques et façonnons stratégiquement leurs langages de communication.",
        about_us_text_p6: "Parce que nous ne sommes pas seulement des développeurs de produits numériques ; nous sommes des partenaires de solutions qui les transportent vers l'avenir, les guident et génèrent de la valeur.",
        vision_title: "Vision",
        vision_text: "Être un point de référence dans le monde numérique en construisant des infrastructures techniques pour les institutions de manière simple, sécurisée et évolutive, avec le principe d'excellence en matière de sécurité de l'information, de durabilité du système et de communication numérique. Avec des systèmes hautement structurés et des solutions de communication stratégiques, nous visons à créer un écosystème qui guide la technologie, assure le leadership et génère de la valeur.",
        mission_title: "Mission",
        mission_text: "Simplifier les processus technologiques complexes en proposant des solutions globales en matière de sécurité de la messagerie, d'intégration de certificats en chaîne, d'automatisation et de communication de marque. Dans chaque projet, nous agissons avec les principes de précision technique, de durabilité et de centrage sur l'utilisateur, permettant aux institutions de positionner leurs actifs numériques de manière sécurisée, professionnelle et efficace.",
        contact_title: "Contact",
        contact_text: "Contactez-nous et discutons de votre projet.",
        contact_address: "Çekmeköy, Istanbul, Turquie",
        contact_phone: "Téléphone : +90531-932 33 96",
        contact_email: "E-mail : info@mrcetin.com",
        footer_privacy: "Politique de confidentialité",
        footer_cookies: "Utilisation des cookies",
        footer_terms: "Conditions d'utilisation",
        footer_legal: "Légal",
        footer_sitemap: "Plan du site",
        footer_copyright: "© 2025 mrCetin Tech. Tous droits réservés.",
        privacy_policy_title: "Politique de confidentialité",
        privacy_policy_text: "Cette politique de confidentialité explique comment mrCetin Tech collecte, utilise, divulgue et protège vos données personnelles. En utilisant nos services, vous acceptez les pratiques décrites dans cette politique. La sécurité de vos données est importante pour nous, et nous prenons toutes les mesures nécessaires pour protéger vos données. Les données que nous collectons sont utilisées pour améliorer nos services, vous offrir une meilleure expérience et remplir nos obligations légales. Nous ne partageons pas vos données avec des tiers sans votre consentement, mais les exigences légales ou les collaborations avec nos fournisseurs de services peuvent constituer une exception. Pour plus d'informations sur vos droits en matière de confidentialité, veuillez nous contacter.",
        cookie_policy_title: "Utilisation des cookies",
        cookie_policy_text: "Notre site Web utilise des cookies pour améliorer votre expérience utilisateur et analyser nos services. Les cookies sont de petits fichiers texte stockés sur votre ordinateur par votre navigateur. Ces cookies nous aident à mémoriser vos préférences, à analyser le trafic du site et à vous fournir un contenu personnalisé. Vous pouvez contrôler et supprimer les cookies à tout moment via les paramètres de votre navigateur. Cependant, veuillez noter que certaines fonctionnalités de notre site Web могут ne pas fonctionner correctement si vous désactivez les cookies. Pour plus d'informations, veuillez consulter notre politique en matière de cookies.",
        terms_of_use_title: "Conditions d'utilisation",
        terms_of_use_text: "En utilisant le site Web de mrCetin Tech, vous acceptez les conditions d'utilisation suivantes. Ces conditions comprennent des dispositions concernant l'utilisation de notre site Web, son contenu, les droits de propriété intellectuelle et les limitations de responsabilité. Le contenu de notre site Web est uniquement à des fins d'information générale et ne constitue pas un avis juridique. Vous êtes censé ne pas abuser de nos services, ne pas vous livrer à des activités illégales et respecter les droits des autres utilisateurs. En cas de violation de ces conditions, votre accès à nos services peut être restreint ou résilié. Veuillez lire attentivement ces conditions.",
        legal_notice_title: "Mentions légales",
        legal_notice_text: "Ces mentions légales contiennent des informations juridiques, les coordonnées de l'entreprise et les déclarations de droits d'auteur de mrCetin Tech. Tout le contenu, les textes, les graphiques, les logos et les logiciels de notre site Web sont la propriété de mrCetin Tech ou sous licence et sont protégés par les lois sur le droit d'auteur. Toute reproduction, distribution ou utilisation non autorisée est interdite. Les informations sur notre site Web sont fournies de bonne foi, mais aucune garantie n'est donnée quant à leur exactitude ou leur exhaustivité. Si vous avez des questions ou des préoccupations juridiques, veuillez consulter un conseiller juridique qualifié.",
        sitemap_title: "Plan du site",
        sitemap_text: "Plan du site pour un accès rapide à toutes les pages du site Web de mrCetin Tech. Comprend les sections principales telles que l'accueil, nos applications, à propos de nous, la vision, la mission, le contact, la politique de confidentialité, l'utilisation des cookies, les conditions d'utilisation, les mentions légales. Cette carte est conçue pour faciliter votre navigation sur notre site Web et vous aider à trouver plus rapidement les informations que vous recherchez. Veuillez nous contacter si un lien de page ne fonctionne pas."
    },
    it: {
        page_title: "mrCetin Tech - Progettazione di app mobili e giochi",
        nav_applications: "Le nostre applicazioni",
        nav_about_us: "Chi siamo",
        nav_vision: "Visione",
        nav_mission: "Missione",
        nav_contact: "Contatto",
        hero_title: "Esperienze innovative di app mobili e giochi",
        hero_subtitle: "Portare i tuoi sogni nel mondo digitale.",
        hero_button: "Esplora i nostri progetti",
        applications_title: "Le nostre applicazioni",
        applications_text: "Qui troverai esempi dei nostri progetti di app mobili e giochi.",
        game_project_1_title: "Progetto di gioco 1",
        game_project_1_description: "Un entusiasmante gioco di formazione professionale. In sviluppo.",
        game_project_2_title: "Progetto di gioco 2",
        game_project_2_description: "Un'esperienza di sfida nostalgica. In sviluppo.",
        mobile_app_project_title: "Progetto di app mobile",
        mobile_app_project_description: "Un'applicazione che migliorerà la tua esperienza di viaggio e completerà le carenze del tuo percorso. Prossimamente.",
        status_in_development: "In sviluppo",
        status_coming_soon: "Prossimamente",
        about_us_title: "Chi siamo",
        about_us_text_p1: "Siamo uno studio di tecnologia e comunicazione che opera con principi di alta precisione tecnica, sicurezza e sostenibilità nei processi di sviluppo di applicazioni mobili e prodotti digitali.",
        about_us_text_p2: "Adottiamo un approccio che semplifica le infrastrutture complesse, ottimizza i processi con l'automazione e presenta ogni passaggio in modo documentato.",
        about_us_text_p3: "In componenti critici come l'architettura delle applicazioni, la sicurezza dei dati, l'esperienza dell'utente e l'infrastruttura di comunicazione; sviluppiamo soluzioni focalizzate sia sull'ingegneria che sulla strategia.",
        about_us_text_p4: "Ogni progetto è progettato non solo per essere funzionale, ma anche per essere integrato nell'identità aziendale, adatto al successo a lungo termine e tecnicamente sostenibile.",
        about_us_text_p5: "Per consentire ai marchi di lasciare un segno forte nel mondo digitale; strutturiamo professionalmente le loro infrastrutture tecniche e modelliamo strategicamente i loro linguaggi di comunicazione.",
        about_us_text_p6: "Perché non siamo solo sviluppatori di prodotti digitali; siamo partner di soluzioni che li portano nel futuro, li guidano e generano valore.",
        vision_title: "Visione",
        vision_text: "Essere un punto di riferimento nel mondo digitale costruendo infrastrutture tecniche per le istituzioni in modo semplice, sicuro e scalabile, con il principio di eccellenza nella sicurezza delle informazioni, sostenibilità del sistema e comunicazione digitale. Con sistemi altamente strutturati e soluzioni di comunicazione strategiche, miriamo a creare un ecosistema che guida la tecnologia, fornisce leadership e genera valore.",
        mission_title: "Missione",
        mission_text: "Semplificare processi tecnologici complessi offrendo soluzioni olistiche in materia di sicurezza della posta elettronica, integrazione di certificati a catena, automazione e comunicazione del marchio. In ogni progetto, agiamo con i principi di accuratezza tecnica, sostenibilità e centralità dell'utente, consentendo alle istituzioni di posizionare i propri asset digitali in modo sicuro, professionale ed efficace.",
        contact_title: "Contatto",
        contact_text: "Contattaci e parliamo del tuo progetto.",
        contact_address: "Çekmeköy, Istanbul, Turchia",
        contact_phone: "Telefono: +90531-932 33 96",
        contact_email: "E-mail: info@mrcetin.com",
        footer_privacy: "Politica sulla privacy",
        footer_cookies: "Uso dei cookie",
        footer_terms: "Condizioni d'uso",
        footer_legal: "Legale",
        footer_sitemap: "Mappa del sito",
        footer_copyright: "© 2025 mrCetin Tech. Tutti i diritti riservati.",
        privacy_policy_title: "Politica sulla privacy",
        privacy_policy_text: "Questa politica sulla privacy spiega come mrCetin Tech raccoglie, utilizza, divulga e protegge i tuoi dati personali. Utilizzando i nostri servizi, accetti le pratiche descritte in questa politica. La sicurezza dei tuoi dati è importante per noi e adottiamo tutte le misure necessarie per proteggere i tuoi dati. I dati che raccogliamo vengono utilizzati per migliorare i nostri servizi, offrirti un'esperienza migliore e adempiere ai nostri obblighi legali. Non condividiamo i tuoi dati con terze parti senza il tuo consenso, ma i requisiti legali o le collaborazioni con i nostri fornitori di servizi possono costituire un'eccezione. Per ulteriori informazioni sui tuoi diritti sulla privacy, ti preghiamo di contattarci.",
        cookie_policy_title: "Uso dei cookie",
        cookie_policy_text: "Il nostro sito Web utilizza i cookie per migliorare la tua esperienza utente e analizzare i nostri servizi. I cookie sono piccoli file di testo memorizzati sul tuo computer dal tuo browser. Questi cookie ci aiutano a ricordare le tue preferenze, analizzare il traffico del sito e fornirti contenuti personalizzati. Puoi controllare ed eliminare i cookie in qualsiasi momento tramite le impostazioni del tuo browser. Tuttavia, tieni presente che alcune funzionalità del nostro sito Web potrebbero non funzionare correttamente se disabiliti i cookie. Per ulteriori informazioni, consulta la nostra politica sui cookie.",
        terms_of_use_title: "Condizioni d'uso",
        terms_of_use_text: "Utilizzando il sito Web di mrCetin Tech, accetti i seguenti termini di utilizzo. Questi termini includono disposizioni relative all'uso del nostro sito Web, al suo contenuto, ai diritti di proprietà intellettuale e alle limitazioni di responsabilità. Il contenuto del nostro sito Web è solo a scopo informativo generale e non costituisce consulenza legale. Ci si aspetta che tu non abusi dei nostri servizi, non intraprenda attività illegali e rispetti i diritti degli altri utenti. In caso di violazione di questi termini, il tuo accesso ai nostri servizi potrebbe essere limitato o interrotto. Si prega di leggere attentamente questi termini.",
        legal_notice_title: "Avviso legale",
        legal_notice_text: "Questo avviso legale contiene informazioni legali, dettagli aziendali e dichiarazioni di copyright di mrCetin Tech. Tutti i contenuti, testi, grafici, loghi e software sul nostro sito Web sono di proprietà o concessi in licenza a mrCetin Tech e sono protetti dalle leggi sul copyright. È vietata la riproduzione, la distribuzione o l'uso non autorizzati. Le informazioni sul nostro sito Web sono fornite in buona fede, ma non viene fornita alcuna garanzia sulla loro accuratezza o completezza. In caso di domande o dubbi legali, consultare un consulente legale qualificato.",
        sitemap_title: "Mappa del sito",
        sitemap_text: "Mappa del sito per un rapido accesso a tutte le pagine del sito Web di mrCetin Tech. Include sezioni principali come Home, Le nostre applicazioni, Chi siamo, Visione, Missione, Contatto, Politica sulla privacy, Uso dei cookie, Condizioni d'uso, Avviso legale. Questa mappa è progettata per facilitare la navigazione nel nostro sito Web e aiutarti a trovare più rapidamente le informazioni che stai cercando. Ti preghiamo di contattarci se un collegamento a una pagina non funziona."
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    // Update the lang attribute of the html tag
    document.documentElement.lang = lang;
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Sayfayı kaydırmayı engelle
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Sayfayı kaydırmayı tekrar etkinleştir
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');

    // Set default language on load (e.g., from browser or saved preference)
    const defaultLang = localStorage.getItem('selectedLanguage') || 'tr';
    const languageSelect = document.getElementById('language-select');
    const mobileLanguageSelect = document.getElementById('mobile-language-select');

    function initializeLanguageSelect(selectElement, initialLang) {
        if (selectElement) {
            selectElement.value = initialLang;
            selectElement.addEventListener('change', (event) => {
                const selectedLanguage = event.target.value;
                localStorage.setItem('selectedLanguage', selectedLanguage);
                setLanguage(selectedLanguage);
            });
        }
    }

    initializeLanguageSelect(languageSelect, defaultLang);
    initializeLanguageSelect(mobileLanguageSelect, defaultLang);
    setLanguage(defaultLang); // Sayfa yüklendiğinde varsayılan dili ayarla

    // Function to adjust hero-section margin-top based on header height
    function adjustHeroSectionMargin() {
        const header = document.querySelector('header');
        const heroSection = document.querySelector('.hero-section');
        if (header && heroSection) {
            heroSection.style.marginTop = header.offsetHeight + 'px';
        }
    }

    // Adjust margin on load and resize
    //adjustHeroSectionMargin();
    //window.addEventListener('resize', adjustHeroSectionMargin);

    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuToggle ? mobileMenuToggle.querySelector('i') : null; // Handle null case

    if (mobileMenuToggle && mobileMenu && mobileMenuIcon) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-open');
            if (mobileMenu.classList.contains('is-open')) {
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-times');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
                document.body.style.overflow = ''; // Re-enable scrolling
            }
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
                document.body.style.overflow = '';
            });
        });
    }

    // Example: Add a class to header on scroll for styling changes
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll-triggered animations using Intersection Observer
    const sections = document.querySelectorAll('.section, .hero-section');

            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // %10'u görünür olduğunda tetikle
            };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Modal functionality
    document.querySelectorAll('.modal-trigger').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('href').substring(1); // # işaretini kaldır
            openModal(modalId);
        });
    });

    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.closest('.modal').id;
            closeModal(modalId);
        });
    });

    window.addEventListener('click', function(event) {
        document.querySelectorAll('.modal').forEach(modal => {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // More advanced animations will be added here later
    // For example, using GSAP for more complex timeline-based animations.

    // Theme Switcher Logic
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const htmlEl = document.documentElement;

    function setTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (themeToggle) themeToggle.checked = newTheme === 'dark';
        if (mobileThemeToggle) mobileThemeToggle.checked = newTheme === 'dark';
    }

    if (themeToggle) themeToggle.addEventListener('change', toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener('change', toggleTheme);

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (themeToggle) themeToggle.checked = savedTheme === 'dark';
    if (mobileThemeToggle) mobileThemeToggle.checked = savedTheme === 'dark';
});
