/* graph.js — Interactive project ↔ skill network graph (vis.js) */

(function () {
    'use strict';

    /* ================================================================
       DATA — Projects + Skills + Edges
       ================================================================ */
    const PROJECTS = [
        {
            id: 'p1',
            label: 'AWS Deployment\nPipeline',
            desc: {
                en: 'CI/CD on AWS with CodePipeline, CodeBuild and deployment to EC2 with Auto Scaling.',
                es: 'CI/CD en AWS con CodePipeline, CodeBuild y despliegue en EC2 con Auto Scaling.'
            },
            skills: ['codepipeline', 'codebuild', 'ec2', 'autoscaling', 'cloudwatch', 'iam', 'github']
        },
        {
            id: 'p2',
            label: 'Batch Data &\nML Pipeline',
            desc: {
                en: 'Batch pipeline for S3 ingestion, Lambda processing and RDS storage — ML-ready.',
                es: 'Pipeline batch para ingesta en S3, procesamiento con Lambda y almacenamiento en RDS, preparado para modelos ML.'
            },
            skills: ['s3', 'lambda', 'rds', 'cloudwatch', 'python', 'sql', 'iam']
        },
        {
            id: 'p3',
            label: 'IaC &\nContainers Demo',
            desc: {
                en: 'Reproducible infrastructure with Terraform deploying services on ECS with Docker containers.',
                es: 'Infraestructura reproducible con Terraform desplegando servicios en ECS con contenedores Docker.'
            },
            skills: ['terraform', 'ecs', 'docker', 'vpc', 'secgroups', 'cloudwatch', 'github']
        }
    ];

    const SKILLS = [
        { id: 'codepipeline', label: 'AWS\nCodePipeline' },
        { id: 'codebuild', label: 'AWS\nCodeBuild' },
        { id: 'ec2', label: 'EC2' },
        { id: 'autoscaling', label: 'Auto\nScaling' },
        { id: 'cloudwatch', label: 'Cloud-\nWatch' },
        { id: 'iam', label: 'IAM' },
        { id: 'github', label: 'GitHub' },
        { id: 's3', label: 'S3' },
        { id: 'lambda', label: 'Lambda' },
        { id: 'rds', label: 'RDS' },
        { id: 'python', label: 'Python' },
        { id: 'sql', label: 'SQL' },
        { id: 'terraform', label: 'Terraform' },
        { id: 'ecs', label: 'ECS' },
        { id: 'docker', label: 'Docker' },
        { id: 'vpc', label: 'VPC' },
        { id: 'secgroups', label: 'Security\nGroups' }
    ];

    /* ================================================================
       THEME COLORS  — read CSS variables so it matches dark/light mode
       ================================================================ */
    const PROJECT_COLOR = '#3ddc84';   // green, distinctive
    const SKILL_COLOR = '#7aaaff';   // blue accent
    const EDGE_COLOR = 'rgba(255,255,255,0.08)';
    const EDGE_HIGHLIGHT = 'rgba(61,220,132,0.5)';
    const FONT_COLOR = '#ede9e3';
    const FONT_COLOR_DIM = 'rgba(237,233,227,0.35)';

    /* Detect light mode */
    function isLight() { return document.body.classList.contains('light-mode'); }

    function themeColors() {
        const light = isLight();
        return {
            projectBg: light ? '#12a155' : PROJECT_COLOR,
            projectBorder: light ? '#0f8a48' : '#2bb86e',
            skillBg: light ? '#2a5bd7' : SKILL_COLOR,
            skillBorder: light ? '#1e46b0' : '#5e94f5',
            edge: light ? 'rgba(0,0,0,0.08)' : EDGE_COLOR,
            edgeHl: light ? 'rgba(18,161,85,0.45)' : EDGE_HIGHLIGHT,
            font: light ? '#1a1a1a' : FONT_COLOR,
            fontDim: light ? 'rgba(26,26,26,0.3)' : FONT_COLOR_DIM,
            bg: light ? '#faf9f7' : '#0d0d0d'
        };
    }

    /* ================================================================
       BUILD VIS.JS DATA SETS
       ================================================================ */
    function buildData() {
        const c = themeColors();
        const nodes = [];
        const edges = [];

        PROJECTS.forEach(p => {
            nodes.push({
                id: p.id,
                label: p.label,
                group: 'project',
                shape: 'dot',
                size: 32,
                color: {
                    background: c.projectBg, border: c.projectBorder,
                    highlight: { background: '#ffffff', border: c.projectBg },
                    hover: { background: '#ffffff', border: c.projectBg }
                },
                font: { color: c.font, size: 13, face: 'Inter, sans-serif', bold: { color: c.font }, multi: true },
                borderWidth: 2,
                shadow: { enabled: true, color: 'rgba(61,220,132,0.15)', size: 16, x: 0, y: 4 }
            });

            p.skills.forEach(sid => {
                edges.push({
                    from: p.id,
                    to: sid,
                    color: { color: c.edge, highlight: c.edgeHl, hover: c.edgeHl },
                    width: 1.4,
                    selectionWidth: 2.5,
                    smooth: { type: 'continuous', roundness: 0.15 }
                });
            });
        });

        SKILLS.forEach(s => {
            nodes.push({
                id: s.id,
                label: s.label,
                group: 'skill',
                shape: 'dot',
                size: 18,
                color: {
                    background: c.skillBg, border: c.skillBorder,
                    highlight: { background: '#ffffff', border: c.skillBg },
                    hover: { background: '#ffffff', border: c.skillBg }
                },
                font: { color: c.font, size: 11, face: 'Inter, sans-serif', multi: true },
                borderWidth: 1.5,
                shadow: { enabled: true, color: 'rgba(122,170,255,0.1)', size: 10, x: 0, y: 3 }
            });
        });

        return { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
    }

    /* ================================================================
       INIT NETWORK
       ================================================================ */
    const container = document.getElementById('graph-canvas');
    if (!container) return;

    const data = buildData();

    const options = {
        physics: {
            solver: 'forceAtlas2Based',
            forceAtlas2Based: {
                gravitationalConstant: -42,
                centralGravity: 0.008,
                springLength: 140,
                springConstant: 0.045,
                damping: 0.4,
                avoidOverlap: 0.6
            },
            stabilization: { iterations: 200, fit: true },
            maxVelocity: 30
        },
        interaction: {
            hover: true,
            tooltipDelay: 100,
            navigationButtons: false,
            keyboard: false,
            zoomView: true,
            dragView: true
        },
        layout: {
            improvedLayout: true
        },
        groups: {
            project: {},
            skill: {}
        }
    };

    const network = new vis.Network(container, data, options);

    /* Stop physics after stabilization so nodes stay put once arranged */
    network.on('stabilizationIterationsDone', () => {
        network.setOptions({ physics: { enabled: false } });
    });

    /* ================================================================
       PANEL UI
       ================================================================ */
    const panel = document.getElementById('graphPanel');
    const panelType = document.getElementById('panelType');
    const panelTitle = document.getElementById('panelTitle');
    const panelDesc = document.getElementById('panelDesc');
    const panelTagsB = document.getElementById('panelTagsBlock');
    const panelTags = document.getElementById('panelTags');
    const panelProjB = document.getElementById('panelProjectsBlock');
    const panelProjs = document.getElementById('panelProjects');
    const panelClose = document.getElementById('panelClose');
    const panelTagsLbl = document.getElementById('panelTagsLabel');
    const panelProjsLbl = document.getElementById('panelProjectsLabel');

    function getLang() { return localStorage.getItem('preferred-lang') || 'en'; }

    function showPanel() { panel.classList.add('visible'); }
    function hidePanel() { panel.classList.remove('visible'); network.unselectAll(); }

    panelClose.addEventListener('click', hidePanel);

    /* Click on empty canvas → close panel */
    network.on('click', ev => {
        if (ev.nodes.length === 0 && ev.edges.length === 0) hidePanel();
    });

    /* ── Click on a node ── */
    network.on('selectNode', ev => {
        const nodeId = ev.nodes[0];
        const lang = getLang();
        const project = PROJECTS.find(p => p.id === nodeId);

        if (project) {
            panelType.textContent = lang === 'es' ? 'Proyecto' : 'Project';
            panelTitle.textContent = project.label.replace(/\n/g, ' ');
            panelDesc.textContent = project.desc[lang] || project.desc.en;
            panelTagsLbl.textContent = lang === 'es' ? 'Tecnologías' : 'Technologies';
            panelTags.innerHTML = project.skills.map(sid => {
                const skill = SKILLS.find(s => s.id === sid);
                return `<span class="panel-tag">${skill ? skill.label.replace(/\n/g, '') : sid}</span>`;
            }).join('');
            panelTagsB.style.display = '';
            panelProjB.style.display = 'none';
            showPanel();
            return;
        }

        const skill = SKILLS.find(s => s.id === nodeId);
        if (skill) {
            panelType.textContent = lang === 'es' ? 'Tecnología' : 'Technology';
            panelTitle.textContent = skill.label.replace(/\n/g, '');
            panelDesc.textContent = '';

            /* Find projects using this skill */
            const related = PROJECTS.filter(p => p.skills.includes(nodeId));
            panelProjsLbl.textContent = lang === 'es' ? 'Usada en proyectos' : 'Used in projects';
            panelProjs.innerHTML = related.map(p =>
                `<span>• ${p.label.replace(/\n/g, ' ')}</span>`
            ).join('');

            panelTagsB.style.display = 'none';
            panelProjB.style.display = '';
            showPanel();
        }
    });

    /* ── Hover highlight: dim unrelated nodes ── */
    network.on('hoverNode', ev => {
        const nodeId = ev.node;
        const connected = network.getConnectedNodes(nodeId);
        const allNodes = data.nodes.get();
        const allEdges = data.edges.get();
        const c = themeColors();

        const updates = allNodes.map(n => {
            if (n.id === nodeId || connected.includes(n.id)) {
                return { id: n.id, font: { color: c.font, size: n.group === 'project' ? 13 : 11, face: 'Inter, sans-serif', multi: true }, opacity: 1 };
            }
            return { id: n.id, font: { color: c.fontDim, size: n.group === 'project' ? 13 : 11, face: 'Inter, sans-serif', multi: true }, opacity: 0.15 };
        });

        const edgeUpdates = allEdges.map(e => {
            const isConnected = e.from === nodeId || e.to === nodeId;
            return {
                id: e.id,
                color: { color: isConnected ? c.edgeHl : c.edge },
                width: isConnected ? 2.5 : 0.8
            };
        });

        data.nodes.update(updates);
        data.edges.update(edgeUpdates);
    });

    network.on('blurNode', () => {
        resetStyles();
    });

    function resetStyles() {
        const c = themeColors();
        const allNodes = data.nodes.get();
        const allEdges = data.edges.get();

        data.nodes.update(allNodes.map(n => ({
            id: n.id,
            font: { color: c.font, size: n.group === 'project' ? 13 : 11, face: 'Inter, sans-serif', multi: true },
            opacity: 1
        })));

        data.edges.update(allEdges.map(e => ({
            id: e.id,
            color: { color: c.edge, highlight: c.edgeHl, hover: c.edgeHl },
            width: 1.4
        })));
    }

    /* ================================================================
       THEME CHANGE — re-color graph when toggling light/dark
       ================================================================ */
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            /* Small delay to let main.js toggle the class first */
            setTimeout(() => {
                const c = themeColors();
                const allNodes = data.nodes.get();

                data.nodes.update(allNodes.map(n => {
                    const isProject = n.group === 'project';
                    return {
                        id: n.id,
                        color: {
                            background: isProject ? c.projectBg : c.skillBg,
                            border: isProject ? c.projectBorder : c.skillBorder,
                            highlight: { background: '#ffffff', border: isProject ? c.projectBg : c.skillBg },
                            hover: { background: '#ffffff', border: isProject ? c.projectBg : c.skillBg }
                        },
                        font: { color: c.font, size: isProject ? 13 : 11, face: 'Inter, sans-serif', multi: true },
                        shadow: {
                            enabled: true,
                            color: isProject ? 'rgba(61,220,132,0.15)' : 'rgba(122,170,255,0.1)',
                            size: isProject ? 16 : 10, x: 0, y: isProject ? 4 : 3
                        }
                    };
                }));

                const allEdges = data.edges.get();
                data.edges.update(allEdges.map(e => ({
                    id: e.id,
                    color: { color: c.edge, highlight: c.edgeHl, hover: c.edgeHl }
                })));
            }, 50);
        });
    }

    /* ================================================================
       I18N for graph-specific strings
       ================================================================ */
    const graphI18n = {
        en: { 'graph-hint': 'Click on a node to see details', 'legend-project': 'Project', 'legend-skill': 'Skill / Technology' },
        es: { 'graph-hint': 'Haz clic en un nodo para ver detalles', 'legend-project': 'Proyecto', 'legend-skill': 'Skill / Tecnología' }
    };

    /* Re-translate graph strings when language changes */
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            const t = graphI18n[lang] || graphI18n.en;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (t[key]) el.textContent = t[key];
            });
        });
    });

    /* Apply on load */
    const initLang = localStorage.getItem('preferred-lang') || (navigator.language.startsWith('es') ? 'es' : 'en');
    const t0 = graphI18n[initLang] || graphI18n.en;
    Object.keys(t0).forEach(key => {
        const el = document.querySelector(`[data-i18n="${key}"]`);
        if (el) el.textContent = t0[key];
    });

})();
