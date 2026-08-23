export default async function run(page) {
  const lock = page.locator('.lock-screen');
  if (await lock.count()) {
    await page.getByRole('button', { name: 'Click to Enter' }).click();
    await page.waitForTimeout(900);
  }

  await page.getByLabel('Portfolio', { exact: true }).click();
  await page.waitForSelector('.finder-app');
  await page.getByRole('button', { name: 'Education' }).click();

  return {
    institution: await page.getByText(/Indian Institute of Information Technology, Agartala/).isVisible(),
    capstone: await page.getByText('Machine Learning-Based Malware Detection System').isVisible(),
    achievement: await page.getByText(/JEE Main Top Achiever/).isVisible(),
  };
}
