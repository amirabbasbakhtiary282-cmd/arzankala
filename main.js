document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedProducts();
    
    const budgetBtn = document.getElementById('budgetBtn');
    if(budgetBtn) {
        budgetBtn.addEventListener('click', showBudgetSuggestions);
    }
    
    const searchForm = document.getElementById('searchForm');
    if(searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = document.getElementById('searchInput').value.trim();
            if (query) {
                window.location.href = `category.html?search=${encodeURIComponent(query)}`;
            }
        });
    }
});

function displayFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if(!container) return;
    
    const featured = productsDatabase.slice(0, 8);
    container.innerHTML = '';
    
    featured.forEach(product => {
        const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
        
        container.innerHTML += `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100">
                    <input type="hidden" class="product__id" value="${product.id}">
                    <img src="${product.image || 'https://via.placeholder.com/300x300/1a2420/10b981?text=' + encodeURIComponent(product.name)}" 
                         class="card-img-top product__img" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <h6 class="card-title product__name">${product.name}</h6>
                        <p class="card-text text-secondary small flex-grow-1">${product.description ? product.description.substring(0, 60) + '...' : ''}</p>
                        <div class="mb-2">
                            ${product.oldPrice ? `<span class="text-muted small text-decoration-line-through">${product.oldPrice.toLocaleString()}</span>` : ''}
                            <div class="product__price fs-5 fw-bold text-green">${product.price.toLocaleString()}</div>
                        </div>
                        ${discount > 0 ? `<span class="badge bg-danger mb-2">${discount}% تخفیف</span>` : ''}
                        <button class="btn btn-success btn-sm w-100 addtocartbtn mb-2">
                            <i class="fa fa-cart-plus"></i> افزودن به سبد
                        </button>
                        <a href="product.html?id=${product.id}" class="btn btn-outline-success btn-sm w-100">
                            <i class="fa fa-eye"></i> مشاهده
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    
    initCartButtons();
}

function showBudgetSuggestions() {
    const budgetInput = document.getElementById('budgetInput');
    const container = document.getElementById('budgetResults');
    
    if(!budgetInput || !container) return;
    
    const budget = parseInt(budgetInput.value);
    
    if (!budget || budget < 0) {
        alert('لطفا مبلغ معتبری وارد کنید');
        return;
    }
    
    const suggestions = getProductsByBudget(budget);
    
    if (suggestions.length === 0) {
        container.innerHTML = '<div class="col-12"><div class="alert alert-warning text-center">محصولی در این بازه قیمتی یافت نشد</div></div>';
        return;
    }
    
    container.innerHTML = '';
    suggestions.forEach(product => {
        container.innerHTML += `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100">
                    <input type="hidden" class="product__id" value="${product.id}">
                    <img src="${product.image || 'https://via.placeholder.com/300x300/1a2420/10b981?text=' + encodeURIComponent(product.name)}" 
                         class="card-img-top product__img" alt="${product.name}">
                    <div class="card-body">
                        <h6 class="card-title product__name">${product.name}</h6>
                        <div class="product__price fs-5 text-green mb-3">${product.price.toLocaleString()}</div>
                        <button class="btn btn-success btn-sm w-100 addtocartbtn mb-2"><i class="fa fa-cart-plus"></i> افزودن</button>
                        <a href="product.html?id=${product.id}" class="btn btn-outline-success btn-sm w-100"><i class="fa fa-eye"></i> مشاهده</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    initCartButtons();
}

function initCartButtons() {
    document.querySelectorAll('.addtocartbtn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.card');
            addProductToCart(card);
        });
    });
}
 document.getElementById('btnaddcourse').addEventListener('click', function() {
    var select = document.getElementById('newcourse');
    var selectedText = select.options[select.selectedIndex].text;
    var selectedValue = select.value;
    
    var ul = document.getElementById('mycourse');
    
    var li = document.createElement('li');
    li.textContent = selectedText;
    li.setAttribute('data-value', selectedValue);
    
    ul.appendChild(li);
});