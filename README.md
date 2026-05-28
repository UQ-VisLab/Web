# VisLab Interactive Banner

Static HTTPS-ready iframe background for the UQ ADP VisLab site.

## Files

- `index.html` - interactive canvas banner page
- `vislab-hero-banner.jpg` - background image used by the page
- `.nojekyll` - keeps GitHub Pages from processing the folder with Jekyll

## Drupal iframe snippet

Replace `PUBLIC_HTTPS_URL_HERE` with the published URL of this folder.

```html
<iframe
  src="PUBLIC_HTTPS_URL_HERE/"
  width="100%"
  height="420"
  frameborder="0"
  scrolling="no"
  title="VisLab interactive digital twin banner"
  style="display:block;width:100%;height:420px;border:0;overflow:hidden;">
</iframe>
```

For a taller homepage hero, use `height="520"` and `height:520px`.

## GitHub Pages route

1. Create a new public GitHub repository, for example `vislab-interactive-banner`.
2. Upload these three files to the repository root.
3. Go to `Settings` > `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/root`, then save.
6. GitHub will provide a public HTTPS URL like:
   `https://YOUR-GITHUB-USERNAME.github.io/vislab-interactive-banner/`

Use that URL as the iframe `src`.

