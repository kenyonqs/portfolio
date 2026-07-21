---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import settings from '../../data/settings.json';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((p) => ({ params: { slug: p.slug }, props: { project: p } }));
}

const { project } = Astro.props;
const { Content } = await project.render();
const d = project.data;
const gallery = (d.gallery || []).filter((g) => g.image);
---
<Layout title={`${d.title} — ${settings.name}`} bgImage={d.backgroundImage || d.mainImage}>
  <div class="card-wrap">
    <div class="card">
      <nav class="pills">
        <a href="/">&#8592; Back to CV</a>
        {settings.email && <a href={`mailto:${settings.email}`}>Email</a>}
        {settings.instagramUrl && <a href={settings.instagramUrl} target="_blank" rel="noopener">Instagram &#8599;</a>}
      </nav>

      <div class="id-row">
        <div>
          <h1>{d.title}</h1>
          <div class="meta">{d.year}{d.venue && ` · ${d.venue}`}</div>
        </div>
        <div class="desc"><Content /></div>
      </div>

      <section>
        <h2>Documentation</h2>
        <div class="gallery">
          <figure>
            <img src={d.mainImage} alt={d.title} />
          </figure>
          {gallery.map((g) => (
            <figure>
              <img src={g.image} alt={g.caption || d.title} loading="lazy" />
              {g.caption && <figcaption>{g.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </section>
    </div>
  </div>
</Layout>
