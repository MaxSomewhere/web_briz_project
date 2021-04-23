let inputUpload = '.el-upload__input';



export class DBillingLogisticsManage {
    fileUpload (fileName, fileType){
        cy.fixture(fileName).then(fileContent => {
            cy.get(inputUpload)
            .attachFile(
                { fileContent, mimeType: fileType },
                { subjectType: 'input', force: true }
              )        
        })
    }
}
export const logistManage = new DBillingLogisticsManage()