from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1280, "height": 1024})

    # Wait for the local server to be ready
    for _ in range(10):
        try:
            page.goto("http://localhost:4173")
            break
        except Exception:
            time.sleep(1)

    # Wait for animations to finish
    time.sleep(2)

    page.screenshot(path="after_screenshot.png")
    browser.close()

print("Screenshot saved to after_screenshot.png")
