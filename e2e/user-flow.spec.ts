import { test, expect } from '@playwright/test';

test.describe('Complete a user flow', () => {
  test('checks first step page info', async ({ page }) => {
    await page.goto('/');

    await page.waitForResponse(
      'https://run.mocky.io/v3/469e2afb-49c7-45e2-9ea0-bab460aa352c',
    );

    await expect(
      page.getByText(
        'Please select the type of sales pipeline that best fits to your company',
      ),
    ).toBeVisible();

    await expect(page.getByTestId('first-step-box')).toHaveCSS(
      'background-color',
      'rgb(6, 41, 82)',
    );

    await expect(page.getByRole('button', { name: 'Next' })).toBeDisabled();

    await page.getByLabel('Basic').check();

    await expect(page.locator('[name="progress-switch"]')).toBeChecked();

    await expect(page.locator('[name="lead-switch"]')).toBeChecked();

    const nextButton = await page.getByRole('button', { name: 'Next' });

    await expect(nextButton).toBeEnabled();

    await nextButton.click();

    await expect(
      page.getByText(
        'Please select the type of sales pipeline that best fits to your company',
      ),
    ).not.toBeVisible();

    await expect(page.getByTestId('second-step-box')).toHaveCSS(
      'background-color',
      'rgb(6, 41, 82)',
    );

    await expect(
      page.getByText('Check below your selected option'),
    ).toBeVisible();

    await expect(page.getByRole('listitem')).toHaveText(['lead', 'progress']);

    const backButton = await page.getByRole('button', { name: 'Back' });

    await expect(backButton).toBeEnabled();

    await backButton.click();

    await expect(
      page.getByText(
        'Please select the type of sales pipeline that best fits to your company',
      ),
    ).toBeVisible();

    await expect(page.getByTestId('first-step-box')).toHaveCSS(
      'background-color',
      'rgb(6, 41, 82)',
    );
  });
});
