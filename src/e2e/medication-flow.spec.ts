import { test, expect } from '@playwright/test';

test.describe('Medication Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should show empty state when no medications', async ({ page }) => {
    // Wait for the loading state to disappear
    await page.waitForSelector('text=Chargement...', { state: 'hidden' });
    
    // Check empty state message
    await expect(page.locator('text=Aucun médicament programmé')).toBeVisible();
  });

  test('should navigate to add medication page', async ({ page }) => {
    // Click on the add medication button in the bottom nav
    await page.click('text=Add');
    
    // Verify we're on the add medication page
    await expect(page).toHaveURL('/add');
    await expect(page.locator('text=Ajouter un médicament')).toBeVisible();
  });

  test('should validate add medication form', async ({ page }) => {
    // Navigate to add page
    await page.goto('/add');

    // Try to submit empty form
    await page.click('text=Ajouter');

    // Check validation messages
    await expect(page.locator('text=Le nom doit contenir au moins 2 caractères')).toBeVisible();
    await expect(page.locator('text=Veuillez spécifier le dosage')).toBeVisible();
    await expect(page.locator('text=Format invalide (HH:MM)')).toBeVisible();
  });

  test('should successfully add a medication', async ({ page }) => {
    // Navigate to add page
    await page.goto('/add');

    // Fill the form
    await page.fill('input[placeholder="ex: Doliprane"]', 'Test Medication');
    await page.fill('input[placeholder="ex: 1000mg"]', '500mg');
    await page.fill('input[type="time"]', '08:00');

    // Submit the form
    await page.click('text=Ajouter');

    // Verify success toast
    await expect(page.locator('text=Test Medication a été ajouté avec succès')).toBeVisible();

    // Verify redirection to home
    await expect(page).toHaveURL('/');
  });

  test('should toggle theme', async ({ page }) => {
    // Navigate to settings
    await page.click('text=More');

    // Open theme selector
    await page.click('button:has-text("Sélectionnez un thème")');

    // Select dark theme
    await page.click('text=Sombre');

    // Verify dark theme is applied
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});
