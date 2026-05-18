with open("src/components/SEO.tsx", "r") as f:
    content = f.read()

content = content.replace("schema?: Record<string, any>", "schema?: Record<string, unknown>")

with open("src/components/SEO.tsx", "w") as f:
    f.write(content)
