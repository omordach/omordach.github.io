import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        await page.goto('http://localhost:4173')

        # Take a full page screenshot
        await page.wait_for_timeout(2000)
        await page.screenshot(path='full_page.png', full_page=True)

        await browser.close()

if __name__ == '__main__':
    asyncio.run(run())
