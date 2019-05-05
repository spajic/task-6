# run sitespeed check to check budget
docker run --rm -v "$(pwd)":/sitespeed.io --network=host sitespeedio/sitespeed.io:8.15.1 http://localhost:3000/ -n 1 --budget.configPath homeBudget.json

#run browsertime to collect HAR
docker run --rm -v "$(pwd)":/browsertime --network=host sitespeedio/browsertime:4.9.2 http://localhost:3000/ -n 5
