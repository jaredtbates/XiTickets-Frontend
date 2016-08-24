<div class="row">
    <div class="col-xs-3 hidden-xs">
        <a href="#" class="btn btn-default pull-left" role="button">Back to Home</a>
    </div>

    <div class="col-sm-6 col-xs-12">
        <ol class="breadcrumb">
            <li [routerLink]="['/shows']" [routerLinkActive]="['active']">Shows</li>
            <li [routerLink]="['/seats']" [routerLinkActive]="['active']">Seats</li>
            <li [routerLink]="['/checkout']" [routerLinkActive]="['active']">Checkout</li>
        </ol>
    </div>

    <div class="col-xs-3 hidden-xs">
        <img src="https://placeholdit.imgix.net/~text?txtsize=30&txt=LOGO&w=250&h=80" alt="Logo" class="img-responsive pull-right">
    </div>
</div>