package testutils

import (
	"fmt"
	"net"
	"strconv"
	"testing"
	"time"
)

func FindFreePort(t *testing.T, host string, maxAttempts int) (int, error) {
	t.Helper()

	if host == "" {
		host = "localhost"
	}

	for i := 0; i < maxAttempts; i++ {
		addr, err := net.ResolveTCPAddr("tcp", net.JoinHostPort(host, "0"))
		if err != nil {
			t.Logf("unable to resolve tcp addr: %v", err)
			continue
		}
		l, err := net.ListenTCP("tcp", addr)
		if err != nil {
			l.Close()
			t.Logf("unable to listen on addr %q: %v", addr, err)
			continue
		}

		port := l.Addr().(*net.TCPAddr).Port
		l.Close()
		return port, nil

	}

	return 0, fmt.Errorf("no free port found")
}

func WaitForPort(host string, port int) bool {
	attempts := 0
	for {
		if IsPortAvailable(host, port) {
			return true
		}
		time.Sleep(time.Millisecond * 10)
		attempts++
		if attempts > 500 { // wait for 5 seconds
			return false
		}
	}
}

func IsPortAvailable(host string, port int) bool {
	timeout := time.Second
	portStr := strconv.Itoa(port)
	conn, err := net.DialTimeout("tcp", net.JoinHostPort(host, portStr), timeout)
	if err != nil {
		return false
	}
	if conn != nil {
		defer conn.Close()
		return true
	}
	return false
}
