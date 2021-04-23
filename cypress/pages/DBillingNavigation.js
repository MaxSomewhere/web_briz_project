let directoryLogistics = '[data-cy=side-menu-logistics-index]';
let directoryOrderList = '[data-cy=side-menu-logistics-BillVatApprove]';

export class menuNavigation {
    ordersList (){
        cy.get(directoryLogistics).click()
        cy.get(directoryOrderList).click()
    }
}
export const goToLogistics = new menuNavigation()