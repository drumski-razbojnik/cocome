<template>
  
<main>
    BALANCE
    <header>
        <h1>Otvorena dugovanja</h1>
    </header>
    <section class="debtors">
        <div class="card debtor" v-for="i in 4" :key="i">
            <header class="card-header">
               <div class="debtor-info">
                    <div class="name">
                        Robi
                    </div>
                    <div class="photo">
                        <picture>
                            
                        </picture>
                    </div>
               </div>
               <div class="">
                   Close
               </div>
            </header>
            <section class="card-content">
                <div class="debtor-debts">
                    <div class="debt" v-for="i in 4" :key="i">
                        <div class="debt-cell debt-order">24.12.2016.</div>
                        <div class="debt-cell debt-name">Pive</div>
                        <div class="debt-cell debt-amount">12.34$</div>
                    </div>
                </div>
                <div></div>
                <div class="debtor-total">
                    <div class="total">                        
                        <div class="total-currency">Euro</div>
                        <div class="total-amount">12.34€</div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</main>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.debtors{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.card{
    flex-basis: 400px;
    flex-grow:1;
    flex-shrink: 1;
    align-self:flex-start;

    border:1px solid #c3c3c3;
    box-sizing:border-box;
    margin: 15px;

    .card-header,.card-content,.card-footer{
        padding:0 15px;
    }

    .card-header{
        border-bottom:1px solid #c3c3c3;
        padding-top:15px;
        padding-bottom:15px;
    }

    .card-content{
        padding-top:20px;
        padding-bottom:20px;
    }

    .card-footer{

    }
}

.debt{
    display:flex;
    flex-direction: row;
    flex-wrap:nowrap;
    justify-content: flex-start;

    position: relative;
    height:30px;
    width:100%;

    &:hover::after{
        content:'';
        height: 100%;
        position:absolute;
        width:100%;

        background-color:#fff;
        opacity:0.8;
    }

    .debt-cell{
        align-self: center;
    }

    .debt-order{
        flex-grow:2;
    }

    .debt-name{
        flex-grow:4;

    }

    .debt-amount {
        flex-grow:2;
        text-align: center;
    }

    .debt-actions{
        
        background-color:red;

        position: absolute;
    }
}

.debtor-total{
    border-top: 1px solid #333;
    box-sizing: border-box;
    margin-top:10px;

    .total{
            display:flex;
    flex-direction: row;
    flex-wrap:nowrap;
    justify-content: flex-start;

        padding-top:10px;

        .total-currency{
            flex-grow:6;
            text-align: right;
        }
        .total-amount{
            flex-grow:2;
            text-align: center;
        }
    }
}


// .debtor{
//     background-color:#fff;
//     border:1px solid #c3c3c3;
//     padding:15px;


//     .debtor-info {
//         border-bottom:1px solid #c3c3c3;
//     }
// }
</style>
