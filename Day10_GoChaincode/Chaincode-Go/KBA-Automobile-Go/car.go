/*
 * SPDX-License-Identifier: Apache-2.0
 */

package main

// Car stores a value
type Car struct {
	AsssetType        string `json:"assetType"`
	CarId             string `json:"carId"`
	Color             string `json:"color"`
	DateOfManufacture string `json:"dateOfManufacture"`
	OwnedBy           string `json:"ownedBy"`
	Make              string `json:"make"`
	Model             string `json:"model"`
	Status            string `json:"status"`
}
