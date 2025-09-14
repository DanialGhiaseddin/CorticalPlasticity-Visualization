import React, { useEffect } from "react";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import BrainRegionTable from "./BrainRegionTable";
import './App.css';

export default function App() {
  // Page title
  useEffect(() => {
    document.title =
      "Network Control Theory Reveals Altered Energy Efficiency in the Deaf Brain - Supplementary Material";
  }, []);

  // Lightweight runtime checks (since we don't have separate test files here)
  useEffect(() => {
    const expectedSections = [
      "overview",
      // "interactive",
      "figures",
      "sup_figures",
      "tables",
      "methods",
      // "downloads",
      // "references",
      "contact",
    ];
    console.assert(
      expectedSections.length === 8,
      "Expected 8 sections in the navigation"
    );
    console.assert(
      document.title.includes("Supplementary Material"),
      "Document title should include 'Supplementary Material'"
    );
  }, []);

  const sections = [
    { id: "overview", label: "Overview" },
    // { id: "sup", label: "Interactive Charts" },
    // { id: "tables", label: "Tables" },
    { id: "figures", label: "Poster Figures" },
    { id: "sup_figures", label: "Supplementary Figures" },
    { id: "tables", label: "Supplementary Tables" },
    { id: "methods", label: "Methods" },
    // { id: "downloads", label: "Downloads" },
    // { id: "references", label: "References" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div>
      <style>{`
        :root{
          --bg:#0b1020;
          --card:#111831;
          --muted:#99a3c2;
          --text:#e9eefc;
          --accent:#5fb3ff;
          --accent-2:#9ae6b4;
          --border: rgba(255,255,255,0.08);
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0;background:var(--bg);color:var(--text);font:16px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial}
        a{color:var(--accent);text-decoration:none}
        a:hover{text-decoration:underline}

        .container{max-width:1100px;margin:0 auto;padding:24px}
        header.hero{padding:48px 0 24px;border-bottom:1px solid var(--border);background:linear-gradient(180deg, rgba(95,179,255,0.08), rgba(0,0,0,0))}
        .title{font-size:clamp(24px,3.6vw,36px);font-weight:800;letter-spacing:0.2px;margin:0;text-align:center}
        .subtitle{margin:10px 0 0;color:var(--muted);font-size:clamp(14px,2vw,16px);text-align:center}

        .logos-row{margin-top:16px;display:flex;gap:16px;justify-content:center;align-items:center;flex-wrap:wrap}
        .logo-box{width:120px;height:60px;border:1px dashed var(--border);border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--muted);background:rgba(255,255,255,0.03)}
        .logos-row img{max-height:60px;max-width:120px;object-fit:contain}

        .nav{position:sticky;top:0;z-index:50;background:rgba(11,16,32,0.85);backdrop-filter:saturate(180%) blur(10px);border-bottom:1px solid var(--border)}
        .nav-inner{display:flex;gap:16px;flex-wrap:wrap;align-items:center;justify-content:center}
        .pill{padding:8px 12px;border:1px solid var(--border);border-radius:999px;transition:all .15s ease}
        .pill:hover{border-color:var(--accent);color:var(--accent)}

        .grid{display:grid;grid-template-columns:1fr;gap:16px}
        @media(min-width:900px){.grid{grid-template-columns: 2fr 1fr;}}

        .card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px;box-shadow:0 6px 24px rgba(0,0,0,0.25)}
        .card h2{margin:0 0 12px;font-size:22px}
        .muted{color:var(--muted)}

        .section{padding:24px 0}
        .section h2{font-size:20px;margin:0 0 8px}
        .hr{height:1px;background:var(--border);margin:24px 0}

        .chart-placeholder,.table-placeholder,.figure-placeholder{
          border:1px dashed var(--border);
          border-radius:12px;padding:24px;text-align:center;color:var(--muted)
        }

        .footer{padding:24px 0;color:var(--muted);font-size:14px}
        code{background:rgba(255,255,255,0.06);padding:2px 6px;border-radius:6px}
      `}</style>

      {/* Hero */}
      <header className="hero">
        <div className="container">
          
                      <div
            className="logos-row"
            style={{ display: "flex", gap: "100px", justifyContent: "center", alignItems: "center" }}
            >
            {/* Replace each placeholder with an <img src="/CorticalPlasticity-Visualization/assets/logoX.svg" alt="Institution" /> */}
            <img src="/CorticalPlasticity-Visualization/assets/UTA_logomark.png" alt="UTA" />
            <img src="/CorticalPlasticity-Visualization/assets/csl.png" alt="Cerebral System Lab" />
            <img src="/CorticalPlasticity-Visualization/assets/mcgill-university-logo-2.png" alt="McGill University" />
          </div>
          
          <h1 className="title">
            Network Control Theory Reveals Altered Energy Efficiency in the Deaf Brain — Supplementary Material
          </h1>
          <p className="subtitle">
            Additional figures, tables, and extended methods to accompany the paper.
          </p>
          {/* <div className="logos-row" aria-label="Affiliation logos"> */}


        </div>
      </header>

      {/* Sticky nav */}
      <div className="nav">
        <div className="container nav-inner">
          {sections.map((s) => (
            <a key={s.id} className="pill" href={`#${s.id}`}>{s.label}</a>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="container" style={{ paddingTop: 24 }}>
        {/* Overview */}
        <section id="overview" className="section">
          <div className="grid">
            <article className="card">
              <h2>Overview</h2>
              <p>
This study investigated how perinatal deafness alters brain dynamics using network control theory (NCT) applied to structural connectomes of hearing and deaf cats. Although structural differences between groups were minimal (~0.21% unique connections), NCT simulations revealed that deaf animals required less control energy for state transitions from visual to frontal and prefrontal regions, suggesting more efficient access to higher-order cognitive areas. In contrast, visual-to-auditory transitions demanded more energy, indicating reduced efficiency in recruiting deprived auditory pathways. Regional analyses showed that auditory areas DZ and vPAF were key contributors to these efficiency gains, providing mechanistic support for the idea that cross-modal plasticity in specific auditory cortices underlies visual compensation in deafness.
              </p>
              {/* <ul>
                <li><strong>Goal:</strong> Compare network control energy metrics between groups.</li>
                <li><strong>Dataset:</strong> Diffusion MRI–based structural connectomes (cat cohort).</li>
                <li><strong>Key Metrics:</strong> Average controllability, minimum energy, efficiency.</li>
              </ul> */}
            </article>
            <aside className="card">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="#figures">Poster Figures</a></li>
                <li><a href="#sup_figures">Supplementary Figures</a></li>
                <li><a href="#tables">Supplementary Tables</a></li>
                <li><a href="#methods">Extended Methods</a></li>
                {/* <li><a href="#downloads">Data & Code</a></li> */}
              </ul>
              {/* <p className="muted">Tip: Keep filenames stable so external links (QR codes, posters) never break.</p> */}
            </aside>
          </div>
        </section>

        <div className="hr" />

        {/* Interactive Charts */}
        {/* <section id="interactive" className="section">
          <h2>Interactive Charts</h2>
          <p className="muted">Swap these placeholders with Plotly or Recharts components later.</p>
          <div className="grid">
            <div className="card">
              <h3>Group Comparison — Minimum Control Energy</h3>
              <div className="chart-placeholder">
                <p>Placeholder for Boxplot / Violin chart</p>
                <small>e.g., using <code>react-plotly.js</code></small>
              </div>
            </div>
            <div className="card">
              <h3>Energy vs. Network Density</h3>
              <div className="chart-placeholder">
                <p>Placeholder for Line chart (AUROC across thresholds)</p>
                <small>Consider resampling or shading 95% CIs</small>
              </div>
            </div>
          </div>
        </section> */}

        <div className="hr" />

        {/* Figures */}
        <section id="figures" className="section">
          <h2>Poster Figures</h2>

          <div className="card">
            <h3>Figure 1. </h3>
            <img src="/CorticalPlasticity-Visualization/assets/1.png" alt="UTA" />
          </div>

          <div className="card">
            <h3>Figure 2. </h3>
            <img src="/CorticalPlasticity-Visualization/assets/2.png" alt="Figure S2" />
          </div>

          <div className="card">
            <h3>Figure 3. </h3>
            <img src="/CorticalPlasticity-Visualization/assets/3.png" alt="Figure S3" />
          </div>

          <div className="card">
            <h3>Figure 4. </h3>
            <img src="/CorticalPlasticity-Visualization/assets/4.png" alt="Figure S4" />
          </div>

          <div className="card">
            <h3>Figure 5. </h3>
            <img src="/CorticalPlasticity-Visualization/assets/5.png" alt="Figure S5" />
          </div>

          <div className="card">
            <h3>Figure 6. </h3>
            <img src="/CorticalPlasticity-Visualization/assets/6.png" alt="Figure S6" />
          </div>
        </section>


        {/* Figures */}
        <section id="sup_figures" className="section">
          <h2>Supplementary Figures</h2>

        <div className="card min-w-0 overflow-hidden">
          <h3>Figure S1.</h3>
          <img
            src="/CorticalPlasticity-Visualization/assets/S1.png"
            alt="UTA"
            className="w-full max-w-full h-auto block mx-auto"
          />
        </div>

          <div className="card">
            <h3>Figure S2. </h3>
            <img src="/CorticalPlasticity-Visualization/assets/S2.png" alt="Figure S2" />
          </div>

          <div className="card">
            <h3>Figure S3. </h3>
            <img src="/CorticalPlasticity-Visualization/assets/S3.png" alt="Figure S3" />
          </div>

          <div className="card">
            <h3>Figure S4. </h3>
            <img src="/CorticalPlasticity-Visualization/assets/S4.png" alt="Figure S4" />
          </div>
        </section>


        <div className="hr" />

                {/* Tables */}
        <section id="tables" className="section">
          <h2>Tables</h2>
          {/* <div className="card">
            <h3>Subject-level Metrics</h3>
            <div className="table-placeholder">
              <p>Placeholder table (CSV → HTML table)</p>
              <small>Render a CSV via a lightweight parser or use a minimal component.</small>
            </div>
            <p className="muted">
              Tip: Keep raw tables downloadable as CSV beside the rendered version for transparency.
            </p>
          </div> */}
          <div className="card table-card">
          <h3>Brain Regions (Abbreviations & Descriptions)</h3>
          <div className="table-scroll" role="region" aria-label="Brain regions table">
            <BrainRegionTable />
          </div>
          <p className="muted" style={{marginTop:12}}>
            {/* Tip: Keep a downloadable CSV/JSON alongside the rendered table for transparency. */}
          </p>
        </div>
        </section>

        {/* Methods */}
{/* <section id="methods" className="section">
  <h2>Extended Methods</h2>

  <div className="card">
    <p>
      In this study, a total of 12 domestic cats (6 hearing, 6 perinatally deafened) 
      were used. Imaging data were collected using a 7 Tesla MRI scanner, including 
      diffusion-weighted imaging (DWI) for white matter tract reconstruction and 
      T1-weighted MP2RAGE scans for anatomical reference.
    </p>
  </div>

  <div className="card" style={{ backgroundColor: "rgba(255,165,0,0.3)" }}>
    <h3>Step 1: Connectome Extraction</h3>
    <ul>
      <li>
        <strong>Preprocessing:</strong> Brain extraction, distortion correction, and 
        alignment to the Catlas feline gray matter atlas (Stolzberg et al., 2017) 
        were performed using FSL (v6.0.1). This included automated brain extraction (BET), 
        distortion correction (TOPUP and EDDY), and manual masking for QC. Templates 
        were aligned to subject diffusion space using ANTs (Sacco et al., 2024).
      </li>
      <li>
        <strong>Connectome Extraction:</strong> Connectomes were generated using probabilistic 
        tractography (probtrackx2) in FSL, connecting 160 predefined ROIs from the Catlas. 
        Streamline counts were computed bidirectionally and summed into a symmetric 
        160×160 matrix.
      </li>
    </ul>
  </div>

  <div className="card" style={{ backgroundColor: "rgba(255,165,0,0.4)" }}>
    <h3>Step 2: Modeling the Brain as a Dynamical System</h3>
    <p>
      The brain dynamics were modeled with a linear time-invariant system:
    </p>
    <pre>
      d𝑥(t)/dt = A·x(t) + B·u(t)
    </pre>
    <ul>
      <li><strong>x(t)</strong>: State vector of neural activity across N regions</li>
      <li><strong>A</strong>: Structural connectivity matrix (from DWI)</li>
      <li><strong>B</strong>: Control input matrix (defines controllable regions)</li>
      <li><strong>u(t)</strong>: Vector of external control inputs</li>
    </ul>
  </div>

  <div className="card" style={{ backgroundColor: "rgba(255,165,0,0.5)" }}>
    <h3>Step 3: Calculating Minimum Control Energy</h3>
    <ul>
      <li>
        The controllability Gramian is defined as:
        <pre>W = ∫₀ᵀ e^(At) B Bᵀ e^(Aᵀt) dt</pre>
      </li>
      <li>
        The minimum control energy required for a transition is:
        <pre>E = (x_T − x_0)ᵀ W⁻¹ (x_T − x_0)</pre>
      </li>
    </ul>
  </div>

  <div className="card" style={{ backgroundColor: "rgba(255,165,0,0.6)" }}>
    <h3>Step 4: Statistical Analysis</h3>
    <ul>
      <li>
        Energy values were compared between hearing and deaf groups using 
        independent two-sample <em>t</em>-tests.
      </li>
      <li>
        Statistical significance was set at <em>p &lt; 0.05</em>.
      </li>
      <li>
        Percentage change in mean energy between groups was also computed 
        to quantify relative differences.
      </li>
    </ul>
  </div>
</section> */}


<section id="methods" className="section">
  <h2 className="text-2xl font-bold mb-6">Extended Methods</h2>

  {/* Study Design */}
  <div className="card mb-6">
    <p>
      We studied 12 domestic cats (6 hearing, 6 perinatally deafened). Imaging was
      performed on a 7 Tesla MRI scanner and included diffusion-weighted imaging (DWI)
      for white matter tract reconstruction and T1-weighted MP2RAGE scans for anatomical
      reference.
    </p>
  </div>

  {/* Step 1 */}
  <div className="card bg-orange-200/60 mb-6 p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-3">Step 1: Connectome Extraction</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Preprocessing:</strong> Brain extraction, distortion correction, and 
        alignment to the Catlas feline gray matter atlas (Stolzberg et al., 2017) were 
        performed using FSL (v6.0.1). This included automated brain extraction (BET), 
        distortion correction (TOPUP, EDDY), and manual QC masking. Templates were aligned 
        to subject diffusion space using ANTs (Sacco et al., 2024).
      </li>
      <li>
        <strong>Connectome extraction:</strong> Probabilistic tractography (probtrackx2, FSL) 
        was performed between 160 predefined Catlas ROIs. Bidirectional streamline counts were 
        summed to form a symmetric 160 × 160 connectivity matrix.
      </li>
    </ul>
  </div>

  {/* Step 2 */}
  <div className="card bg-orange-300/60 mb-6 p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-3">Step 2: Modeling the Brain as a Dynamical System</h3>
    <p className="mb-3">
      Brain dynamics were represented using a linear time-invariant (LTI) system:
    </p>
    {/* <p className="text-center font-mono text-lg mb-3">
      𝑑𝑥(t)/𝑑t = A · x(t) + B · u(t)
    </p> */}
    <BlockMath math="\frac{dx(t)}{dt} = A \cdot x(t) + B \cdot u(t)" />
    <ul className="list-disc pl-6 space-y-1">
      <li>
        <strong><InlineMath math="x(t)" />:</strong> state vector of neural activity across N regions
      </li>
      <li>
        <strong><InlineMath math="A" />:</strong> structural connectivity matrix (from DWI)
      </li>
      <li>
        <strong><InlineMath math="B" />:</strong> control input matrix (defines controllable regions)
      </li>
      <li>
        <strong><InlineMath math="u(t)" />:</strong> external control input vector
      </li>
    </ul>
  </div>

  {/* Step 3 */}
  {/* <div className="card bg-orange-400/60 mb-6 p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-3">Step 3: Minimum Control Energy</h3>
    <p className="mb-2">
      The controllability Gramian was defined as:
    </p>
    <p className="text-center font-mono text-lg mb-3">
      W = ∫₀ᵀ e<sup>At</sup> B B<sup>ᵀ</sup> e<sup>Aᵀt</sup> dt
    </p>
    <p className="mb-2">
      The minimum control energy required for a state transition was:
    </p>
    <p className="text-center font-mono text-lg">
      E = (x<sub>T</sub> − x<sub>0</sub>)<sup>ᵀ</sup> W<sup>−1</sup> (x<sub>T</sub> − x<sub>0</sub>)
    </p>
  </div> */}
  <div className="card bg-orange-400/60 mb-6 p-4 rounded-lg shadow">
  <h3 className="text-xl font-semibold mb-3">Step 3: Minimum Control Energy</h3>

  <p className="mb-2">The controllability Gramian was defined as:</p>
  <BlockMath math="W = \int_{0}^{T} e^{At} B B^{\top} e^{A^{\top} t} \, dt" />

  <p className="mb-2">The minimum control energy required for a state transition was:</p>
  <BlockMath math="E = (x_{T} - x_{0})^{\top} W^{-1} (x_{T} - x_{0})" />
  </div>

  {/* Step 4 */}
  <div className="card bg-orange-500/60 p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-3">Step 4: Statistical Analysis</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        Energy values were compared between hearing and deaf groups using independent 
        two-sample <InlineMath math="t" />-tests.
      </li>
      <li>
        Significance threshold was set at <InlineMath math="p < 0.05" />.
      </li>
      <li>
        Percentage change in mean energy between groups was computed to quantify relative differences.
      </li>
    </ul>
  </div>
</section>



        <div className="hr" />

        {/* Downloads */}
        <section id="downloads" className="section">
          <h2>Downloads</h2>
          <div className="card">
            <ul>
              <li><a href="/CorticalPlasticity-Visualization/assets/main_figures.pdf" download>Main Figures</a></li>
              <li><a href="/CorticalPlasticity-Visualization/assets/supp_figures.pdf" download>Supplementary Figures</a></li>
              <li><a href="/CorticalPlasticity-Visualization/assets/brain_regions.csv" download>Brain Regions</a></li>
            </ul>
            {/* <p className="muted">Place files under <code>public/assets/</code> in your project so they deploy with GitHub Pages.</p> */}
          </div>
        </section>

        <div className="hr" />

        {/* References */}
        {/* <section id="references" className="section">
          <h2>References</h2>
          <div className="card">
            <ol>
              <li>Gu et al., Controllability of structural brain networks. <em>Nat Commun</em> (2015).</li>
              <li>Betzel et al., Generative models of the human connectome. <em>NeuroImage</em> (2016).</li>
            </ol>
          </div>
        </section> */}

        <div className="hr" />

        {/* Contact */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="card">
            <p>Questions or requests for data/code access:</p>
            <ul>
              <li>Email: <a href="mailto:danial.ghiaseddin@mail.mcgill.ca">danial.ghiaseddin@mail.mcgill.ca</a></li>
              <li>GitHub: <a href="https://github.com/DanialGhiaseddin">@DanialGhiaseddin</a></li>
            </ul>
          </div>
        </section>

        <footer className="footer">
          <div className="hr" />
          <div className="container">
            © {new Date().getFullYear()} — Supplementary materials for
            <span> “Network Control Theory Reveals Altered Energy Efficiency in the Deaf Brain”.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
