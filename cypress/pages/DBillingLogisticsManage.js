export class DBillingLogisticsManage {
    fileUpload (fileName, fileType){
        cy.fixture(fileName).then(fileContent => {
            cy.get('.el-upload__input')
            .attachFile(
                { fileContent, mimeType: fileType },
                { subjectType: 'input', force: true }
              )        
        })
    }
}
export const logistManage = new DBillingLogisticsManage()