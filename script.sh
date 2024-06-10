#!/bin/sh

# Определяем текущую платформу
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac

# Выполняем действия, специфичные для платформы
if [ "${machine}" = "MinGw" ]; then
    echo "Вы используете, Windows!"
elif [ "${machine}" = "Mac" ]; then
    echo "Вы используете, macOS!"
else
    echo "Неизвестная платформа!"
fi

# Функция для отображения текста в цвете
colorize() {
    color=$1
    text=$2
    case $color in
        red)    tput setaf 1;;
        green)  tput setaf 2;;
        *)      tput sgr0;;
    esac
    printf '%s' "$text"
    tput sgr0
}

# Список папок
directories=(
"ethereum-address-dapp"
"ethereum-bank-deposit"
"ethereum-dice-dapp"
"ethereum-dice2-dapp"
"ethereum-donation-dapp"
"ethereum-dragonfarm-dapp"
"ethereum-dragonforge-dapp"
"ethereum-grades-dapp"
"ethereum-insurance-dapp"
"ethereum-luckyseven-dapp"
"ethereum-mycoin-dapp"
"ethereum-owner-dapp"
"ethereum-react-dapp"
"ethereum-rlottery-dapp"
"ethereum-split-dapp"
"ethereum-transaction-dapp"
"ethereum-voter-dapp"
"ethereum-voting-dapp"
"ethreum-genereateseed-dapp"
)

printf '%s' "Легенда: "
colorize $"green" $"■"
printf '%s' " - запуск возможен"
colorize $"red" $" ■"
printf '%s' " - запуск невозможен"
echo ""
for i in "${!directories[@]}"; do
    case "${directories[$i]}" in
        "ethereum-dice-dapp2" | "ethereum-voting-dapp") color="red";;
        *) color="green";;
    esac
    colorize $color "${i}. ${directories[$i]}"
    echo ""
done

echo "Выберите папку по номеру:"
read choice

if [ "$choice" -ge 0 ] 2>/dev/null && [ "$choice" -lt "${#directories[@]}" ]; then
    selected_dir="${directories[$choice]}"
    echo "Вы выбрали ${selected_dir}"
    cd "$selected_dir" || exit
    echo "Текущая директория: $(pwd)"
     if [ "${machine}" = "MinGw" ]; then
        start "new terminal" sh -c "cd '$(pwd)'; npm run start-ganache-windows; sleep 10"
        while ! netstat -an | grep ':8545.*LISTEN'; do
            sleep 1
        done
        start "new terminal" sh -c "cd '$(pwd)'; npm run start"
    elif [ "${machine}" = "Mac" ]; then
        osascript -e 'tell application "Terminal" to do script "cd '$(pwd)' && npm run start-ganache-mac && while ! nc -z localhost 8545; do sleep 1; done && npm start"'
    fi
        while true; do
            echo "Введите '0' для завершения работы скрипта:"
            read user_input
            if [ "$user_input" = "0" ]; then
                echo "Выключение серверов на портах 8545 и 3000..."
                if [ "${machine}" = "Linux" ] || [ "${machine}" = "Mac" ]; then
                    kill $(lsof -t -i:8545) 2>/dev/null
                    kill $(lsof -t -i:3000) 2>/dev/null
                    osascript -e 'tell application "Terminal" to do script "cd '$(pwd)' && npm run clear-mac; exit"'
               elif [ "${machine}" = "MinGw" ]; then
                  pid=$(netstat -aon | grep LISTENING | grep ":3000" | awk '{print $NF}')
                  pid2=$(netstat -aon | grep LISTENING | grep ":8545" | awk '{print $NF}')

                  taskkill -F //PID $pid
                  taskkill -F //PID $pid2
                  start "clear cache" sh -c "cd '$(PWD)'; npm run clear-windows; exit"
               fi
                echo "Выключение..."
                break
            fi
        done
else
    echo "Неверный выбор!"
fi
