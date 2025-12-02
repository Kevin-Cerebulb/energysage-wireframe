# EnergySage.ai

**Asset Performance Monitoring Platform**

A modern, responsive web dashboard for monitoring industrial assets including generators, mining trucks, HVAC systems, turbines, and compressors.

![EnergySage Dashboard](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## 🚀 Live Demo

Visit the live demo: [EnergySage.ai Demo](https://your-username.github.io/energysage-website/)

## 📋 Features

### Dashboard (KPI Page)
- **Real-time KPIs**: Total Faults, Outliers, Open Cases, MTBF, MTTC
- **Interactive Charts**: 12-month trend analysis with Chart.js
- **Site Availability**: Color-coded availability cards with drill-down panels
- **Recommendations Drawer**: Priority-based alerts (Critical, Monitor, Inform)
- **Filtering**: Multi-select Sites and Models dropdowns
- **Date Range Picker**: Custom date selection with presets

### Asset Summary
- **Status Filtering**: All, Running, Stopped, Ready, Not Ready tabs
- **Interactive Map**: Leaflet-powered global asset visualization
- **Asset Table**: Searchable, sortable, groupable data table
- **Real-time Stats**: Dynamic KPIs based on selected filters
- **Collapsible Map**: Toggle map visibility with keyboard shortcut

### Equipment Details
- **Equipment Overview**: Image, specs, real-time KPIs
- **Operational Sections**: Tabbed interface (Engine, Generator, Balance of Plant, Health)
- **Fault Summary**: Threshold-based outlier table
- **Performance Gauges**: Canvas-rendered circular gauges
- **Technician Notes**: Timeline-style activity feed

## 🎨 Theme Support

- **Dark Mode** (default): Professional dark theme
- **Light Mode**: Clean light theme
- **Auto-detection**: Respects system preference
- **Persistence**: Theme choice saved to localStorage
- **Keyboard Toggle**: `Ctrl/Cmd + D` to switch themes

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + D` | Toggle dark/light theme |
| `Ctrl/Cmd + M` | Toggle map (Asset Summary) |
| `Escape` | Close drawers and panels |

## 📁 Project Structure

```
energysage-website/
├── index.html           # Entry point (redirects to Dashboard)
├── LandingPage.html     # KPI Dashboard
├── AssetSummary.html    # Asset Summary with Map
├── EquipmentDetails.html # Equipment Detail View
├── css/
│   └── styles.css       # Shared styles
├── js/
│   └── app.js           # Shared JavaScript
└── README.md            # This file
```

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations
- **JavaScript** - ES6+ features
- **Tailwind CSS** - Utility-first styling (via CDN)
- **Chart.js** - Interactive charts
- **Leaflet** - Interactive maps

## 🚀 Deployment

### GitHub Pages

1. Fork or clone this repository
2. Go to repository Settings > Pages
3. Set source to "main" branch
4. Your site will be available at `https://username.github.io/repo-name/`

### Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

## 📱 Responsive Design

The dashboard is optimized for:
- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)

## 🎯 Target Users

- **CTOs/Executives**: High-level KPIs and trends
- **Plant Engineers**: Detailed diagnostics and equipment status
- **Operations Teams**: Real-time monitoring and alerts

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ⚡ by EnergySage.ai
