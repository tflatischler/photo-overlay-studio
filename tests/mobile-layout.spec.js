import { test, expect } from '@playwright/test';

function simulateEditor(page, canvasW = 1200, canvasH = 800) {
  return page.evaluate(({ w, h }) => {
    document.getElementById('uploadZone').style.display = 'none';
    document.getElementById('editor').classList.add('active');

    const canvas = document.getElementById('previewCanvas');
    canvas.width = w;
    canvas.height = h;
    const c = canvas.getContext('2d');
    c.fillStyle = '#5a8fa3';
    c.fillRect(0, 0, w, h);

    const barH = Math.round(h * 0.06);
    c.fillStyle = 'rgba(0,0,0,0.8)';
    c.fillRect(0, h - barH, w, barH);

    const grid = document.getElementById('exifGrid');
    grid.innerHTML = [
      { label: 'Camera', value: 'Test Camera', full: true },
      { label: 'Lens', value: 'Test Lens 24-70mm', full: true },
      { label: 'Aperture', value: 'f/2.8' },
      { label: 'Shutter', value: '1/250s' },
      { label: 'ISO', value: 'ISO 400' },
      { label: 'Resolution', value: `${w} × ${h}` },
    ].map(it =>
      `<div class="exif-item${it.full ? ' full' : ''}"><div class="label">${it.label}</div><div class="value">${it.value}</div></div>`
    ).join('');

    const isCompact = window.matchMedia('(max-width:768px)').matches ||
                       window.matchMedia('(max-height:500px) and (orientation:landscape)').matches;
    if (isCompact) {
      document.getElementById('panelExif')?.classList.add('collapsed');
      document.getElementById('panelSettings')?.classList.add('collapsed');
    }
  }, { w: canvasW, h: canvasH });
}

test.describe('Upload screen', () => {
  test('no horizontal overflow', async ({ page }) => {
    await page.goto('/');
    const overflow = await page.evaluate(() => document.body.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });

  test('upload zone is visible and tappable', async ({ page }) => {
    await page.goto('/');
    const zone = page.locator('#uploadZone');
    await expect(zone).toBeVisible();
    const box = await zone.boundingBox();
    expect(box.width).toBeGreaterThan(100);
  });
});

test.describe('Editor — landscape photo (1200×800)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await simulateEditor(page, 1200, 800);
    await page.waitForTimeout(200);
  });

  test('no horizontal overflow', async ({ page }) => {
    const { scrollW, clientW } = await page.evaluate(() => ({
      scrollW: document.body.scrollWidth,
      clientW: document.documentElement.clientWidth,
    }));
    expect(scrollW).toBeLessThanOrEqual(clientW);
  });

  test('canvas fits within viewport', async ({ page }) => {
    const { canvasRight, viewportW } = await page.evaluate(() => ({
      canvasRight: document.getElementById('previewCanvas').getBoundingClientRect().right,
      viewportW: document.documentElement.clientWidth,
    }));
    expect(canvasRight).toBeLessThanOrEqual(viewportW);
  });

  test('canvas has positive display dimensions', async ({ page }) => {
    const { w, h } = await page.evaluate(() => {
      const r = document.getElementById('previewCanvas').getBoundingClientRect();
      return { w: r.width, h: r.height };
    });
    expect(w).toBeGreaterThan(50);
    expect(h).toBeGreaterThan(50);
  });

  test('panel titles are fully visible', async ({ page }) => {
    const panels = ['panelExif', 'panelStyles', 'panelSettings'];
    for (const id of panels) {
      const panel = page.locator(`#${id}`);
      const box = await panel.boundingBox();
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(
        await page.evaluate(() => document.documentElement.clientWidth)
      );
    }
  });

  test('download buttons are visible', async ({ page }) => {
    const isCompact = await page.evaluate(() =>
      window.matchMedia('(max-width:768px)').matches ||
      window.matchMedia('(max-height:500px) and (orientation:landscape)').matches
    );

    if (isCompact) {
      const bar = page.locator('#mobileDownload');
      await expect(bar).toBeVisible();
    } else {
      const panel = page.locator('.panel-export');
      await expect(panel).toBeVisible();
    }
  });
});

test.describe('Editor — portrait photo (800×1200)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await simulateEditor(page, 800, 1200);
    await page.waitForTimeout(200);
  });

  test('no horizontal overflow', async ({ page }) => {
    const { scrollW, clientW } = await page.evaluate(() => ({
      scrollW: document.body.scrollWidth,
      clientW: document.documentElement.clientWidth,
    }));
    expect(scrollW).toBeLessThanOrEqual(clientW);
  });

  test('canvas fits within viewport', async ({ page }) => {
    const { canvasRight, viewportW } = await page.evaluate(() => ({
      canvasRight: document.getElementById('previewCanvas').getBoundingClientRect().right,
      viewportW: document.documentElement.clientWidth,
    }));
    expect(canvasRight).toBeLessThanOrEqual(viewportW);
  });
});

test.describe('Editor — high-res photo (7008×4672)', () => {
  test('no horizontal overflow with large canvas', async ({ page }) => {
    await page.goto('/');
    const maxDim = 1200;
    const scale = Math.min(maxDim / 7008, maxDim / 4672);
    await simulateEditor(page, Math.round(7008 * scale), Math.round(4672 * scale));
    await page.waitForTimeout(200);

    const { scrollW, clientW } = await page.evaluate(() => ({
      scrollW: document.body.scrollWidth,
      clientW: document.documentElement.clientWidth,
    }));
    expect(scrollW).toBeLessThanOrEqual(clientW);
  });
});
