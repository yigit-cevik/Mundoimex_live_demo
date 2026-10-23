/**
 * Mundoimex Main Global JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOpenIcon = document.getElementById('menuOpenIcon');
    const menuCloseIcon = document.getElementById('menuCloseIcon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuOpenIcon?.classList.add('hidden');
                menuCloseIcon?.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuOpenIcon?.classList.remove('hidden');
                menuCloseIcon?.classList.add('hidden');
            }
        });
    }

    // Refresh Lucide icons if dynamically modified
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

/**
 * Toast Notification Helper
 */
function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm pointer-events-none';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bg = type === 'success' ? 'bg-emerald-600 text-white' : 
               type === 'error' ? 'bg-rose-600 text-white' : 
               type === 'warning' ? 'bg-amber-600 text-white' : 'bg-navy-900 text-slate-100 border border-slate-700';

    toast.className = `${bg} pointer-events-auto shadow-2xl rounded-xl p-4 flex items-center gap-3 text-sm transition-all duration-300 transform translate-y-3 opacity-0`;
    toast.innerHTML = `
        <div class="flex-1">${message}</div>
        <button class="text-white/80 hover:text-white" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-3', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
    });

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-3');
        setTimeout(() => toast.remove(), 300);
    }, 4500);
}
