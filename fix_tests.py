with open("src/pages/services/ServicePage.test.tsx", "r") as f:
    content = f.read()

content = content.replace("import { LanguageProvider } from '../../context/LanguageContext'", "import { LanguageProvider } from '../../context/LanguageContext'\nimport { HelmetProvider } from 'react-helmet-async'")
content = content.replace("<LanguageProvider>", "<HelmetProvider>\n<LanguageProvider>")
content = content.replace("</LanguageProvider>", "</LanguageProvider>\n</HelmetProvider>")

with open("src/pages/services/ServicePage.test.tsx", "w") as f:
    f.write(content)
