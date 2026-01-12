window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// ===== 新增：在页面加载时移除指定的 footer 元素 =====
document.addEventListener('DOMContentLoaded', function() {
    // 移除 div.arkFeedback
    const arkFeedback = document.querySelector('div.arkFeedback');
    if (arkFeedback) {
        arkFeedback.remove(); // 从DOM中彻底移除
        console.log('Removed div.arkFeedback');
    }
  
    // 移除指定的 footer 元素（通过 class 属性匹配）
    const footer = document.querySelector('footer[class*="global"][class*="blade"][class*="solid"][class*="brand-lighter-gray"][class*="theme-light-2"][class*="component"]');
    if (footer) {
        footer.remove();
        console.log('Removed footer with class: global blade solid brand-lighter-gray theme-light-2 component');
    }

    const disclaimer = document.querySelector('div.disclaimer-top');
    if (disclaimer) {
        disclaimer.remove(); // 从DOM中彻底移除
        console.log('Removed div.disclaimer-top');
    }
});
// ===== 新增结束 =====

// 原有代码（保持不变，不再移除 div.container）
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })