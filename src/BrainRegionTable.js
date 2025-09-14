import React from 'react';

// Data from the CSV converted into a JavaScript array
const brainRegions = [
  { category: 'Auditory', abbreviation: 'A1', description: 'Primary Auditory Cortex' },
  { category: 'Auditory', abbreviation: 'A2', description: 'Second Auditory Cortex' },
  { category: 'Auditory', abbreviation: 'AAF', description: 'Anterior Auditory Field' },
  { category: 'Auditory', abbreviation: 'dPE', description: 'Posterior Ectosylvian Auditory Cortex, dorsal division' },
  { category: 'Auditory', abbreviation: 'DZ', description: 'Dorsal Zone of Auditory Cortex' },
  { category: 'Auditory', abbreviation: 'pPE', description: 'Posterior Ectosylvian Gyrus, posterior division' },
  { category: 'Auditory', abbreviation: 'FAES', description: 'Field of the Anterior Ectosylvian Sulcus' },
  { category: 'Auditory', abbreviation: 'IN', description: 'Auditory Insular Cortex' },
  { category: 'Auditory', abbreviation: 'iPE', description: 'Posterior Ectosylvian Auditory Cortex, intermediate division' },
  { category: 'Auditory', abbreviation: 'PAF', description: 'Posterior Auditory Field' },
  { category: 'Auditory', abbreviation: 'TE', description: 'Temporal Cortex' },
  { category: 'Auditory', abbreviation: 'VAF', description: 'Ventral Auditory Field' },
  { category: 'Auditory', abbreviation: 'vPAF', description: 'Posterior Auditory Field, ventral division' },
  { category: 'Auditory', abbreviation: 'vPE', description: 'Posterior Ectosylvian Auditory Cortex, ventral division' },
  { category: 'Somatosensory', abbreviation: '1', description: 'Area 1, Primary Somatosensory Cortex' },
  { category: 'Somatosensory', abbreviation: '2', description: 'Area 2, Primary Somatosensory Cortex' },
  { category: 'Somatosensory', abbreviation: '3a', description: 'Area 3a, Primary Somatosensory Cortex' },
  { category: 'Somatosensory', abbreviation: '3b', description: 'Area 3b, Primary Somatosensory Cortex' },
  { category: 'Somatosensory', abbreviation: '5al', description: 'Area 5a, lateral division' },
  { category: 'Somatosensory', abbreviation: '5am', description: 'Area 5a, medial division' },
  { category: 'Somatosensory', abbreviation: '5bl', description: 'Area 5b, lateral division' },
  { category: 'Somatosensory', abbreviation: '5bm', description: 'Area 5b, medial division' },
  { category: 'Somatosensory', abbreviation: '5m', description: 'Area 5, medial division' },
  { category: 'Somatosensory', abbreviation: 'S2', description: 'Second Somatosensory Cortex' },
  { category: 'Somatosensory', abbreviation: 'S2m', description: 'Second Somatosensory Cortex, medial division' },
  { category: 'Somatosensory', abbreviation: 'S3', description: 'Third Somatosensory Cortex' },
  { category: 'Somatosensory', abbreviation: 'S4', description: 'Fourth Somatosensory Cortex' },
  { category: 'Somatosensory', abbreviation: 'S5', description: 'Fifth Somatosensory Cortex' },
  { category: 'Visual', abbreviation: '17', description: 'Area 17' },
  { category: 'Visual', abbreviation: '18', description: 'Area 18' },
  { category: 'Visual', abbreviation: '19', description: 'Area 19' },
  { category: 'Visual', abbreviation: '20a', description: 'Area 20a' },
  { category: 'Visual', abbreviation: '20b', description: 'Area 20b' },
  { category: 'Visual', abbreviation: '21a', description: 'Area 21a' },
  { category: 'Visual', abbreviation: '21b', description: 'Area 21b' },
  { category: 'Visual', abbreviation: '7a', description: 'Area 7, anterior division' },
  { category: 'Visual', abbreviation: '7m', description: 'Area 7, medial division' },
  { category: 'Visual', abbreviation: '7p', description: 'Area 7, posterior division' },
  { category: 'Visual', abbreviation: 'AEV', description: 'Anterior Ectosylvian Visual Area' },
  { category: 'Visual', abbreviation: 'ALLS', description: 'Anterolateral Lateral Suprasylvian Area' },
  { category: 'Visual', abbreviation: 'AMLS', description: 'Anteromedial Lateral Suprasylvian Area' },
  { category: 'Visual', abbreviation: 'CVA', description: 'Cingulate Visual Area' },
  { category: 'Visual', abbreviation: 'DLS', description: 'Dorsolateral Suprasylvian Visual Area' },
  { category: 'Visual', abbreviation: 'PLLS', description: 'Posterolateral Lateral Suprasylvian Area' },
  { category: 'Visual', abbreviation: 'PMLS', description: 'Posteromedial Lateral Suprasylvian Area' },
  { category: 'Visual', abbreviation: 'PS', description: 'Posterior Suprasylvian Visual Area' },
  { category: 'Visual', abbreviation: 'SVA', description: 'Splenial Visual Area' },
  { category: 'Visual', abbreviation: 'VLS', description: 'Ventrolateral Suprasylvian Area' },
  { category: 'Motor', abbreviation: '4δ', description: 'Area Praecentralis Macropyramidalis' },
  { category: 'Motor', abbreviation: '4fu', description: 'Area Praecentralis in fundo' },
  { category: 'Motor', abbreviation: '4γ', description: 'Area Praecentralis' },
  { category: 'Motor', abbreviation: '4sfu', description: 'Area Praecentralis supra fundo' },
  { category: 'Frontal', abbreviation: '6aα', description: 'Area Frontalis Agranularis Mediopyramidalis' },
  { category: 'Frontal', abbreviation: '6aβ', description: 'Area Frontalis Agranularis Macropyramidalis' },
  { category: 'Frontal', abbreviation: '6aγ', description: 'Area 6, lateral division' },
  { category: 'Frontal', abbreviation: '6iffu', description: 'Area 6, infra fundum' },
  { category: 'Pre-frontal', abbreviation: 'PFdl', description: 'Prefrontal Cortex, dorsolateral division' },
  { category: 'Pre-frontal', abbreviation: 'PFdm', description: 'Prefrontal Cortex, dorsomedial division' },
  { category: 'Pre-frontal', abbreviation: 'PFv', description: 'Prefrontal Cortex, ventral division' },
  { category: 'Insular', abbreviation: '36', description: 'Perirhinal Cortex' },
  { category: 'Insular', abbreviation: 'AId', description: 'Agranular Insular Area, dorsal division' },
  { category: 'Insular', abbreviation: 'AIv', description: 'Agranular Insular Area, ventral division' },
  { category: 'Insular', abbreviation: 'ALd', description: 'Agranular Insular Area, dorsolateral division' },
  { category: 'Insular', abbreviation: 'ALv', description: 'Agranular Insular Area, ventrolateral division' },
  { category: 'Insular', abbreviation: 'DI', description: 'Dysgranular Insular Area' },
  { category: 'Insular', abbreviation: 'GI', description: 'Granular Insular Area' },
  { category: 'Limbic', abbreviation: 'CgA', description: 'Cingulate Area, anterior division' },
  { category: 'Limbic', abbreviation: 'CgP', description: 'Cingulate Area, posterior division' },
  { category: 'Limbic', abbreviation: 'PL', description: 'Prelimbic Area' },
  { category: 'Misc', abbreviation: 'G', description: 'Primary Gustatory Area' },
  { category: 'Misc', abbreviation: 'MZ', description: 'Multisensory Zone' },
  { category: 'Misc', abbreviation: 'Pp', description: 'Prepryiform Cortex' },
  { category: 'Misc', abbreviation: 'RS', description: 'Retrosplenial Area' },
  { category: 'Non-cortical', abbreviation: 'Hipp', description: 'Hippocampus' },
  { category: 'Non-cortical', abbreviation: 'IC', description: 'Inferior Colliculi' },
  { category: 'Non-cortical', abbreviation: 'SC', description: 'Superior Colliculi' },
  { category: 'Non-cortical', abbreviation: 'LGN', description: 'Lateral Geniculate Nucleus' },
  { category: 'Non-cortical', abbreviation: 'MGB', description: 'Medial Geniculate Nucleus' },
  { category: 'Non-cortical', abbreviation: 'CN', description: 'Caudate Nucleus' },
  { category: 'Non-cortical', abbreviation: 'PAG', description: 'Periaqueductal Gray' },
  { category: 'Non-cortical', abbreviation: 'Cbm', description: 'Cerebellum' }
];

const BrainRegionTable = () => (
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Abbrev.</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {brainRegions.map((row, idx) => (
        <tr key={idx}>
          <td>{row.category}</td>
          <td>{row.abbreviation}</td>
          <td>{row.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BrainRegionTable;
